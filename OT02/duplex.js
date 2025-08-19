// duplex-mod.js
const { Duplex, pipeline } = require('node:stream');
const fs = require('node:fs');

class ModificadorDuplex extends Duplex {
  constructor(opts = {}) {
    super(opts);
    this._queue = [];   // buffer de saída (lado de leitura)
    this._ended = false;

    // Quando o lado de escrita terminar, marcamos e tentamos drenar
    this.on('finish', () => {
      this._ended = true;
      this._read(); // tenta empurrar null se não houver mais dados
    });
  }

  // Recebe dados que alguém escreve neste stream
  _write(chunk, enc, cb) {
    try {
      const str = chunk.toString();
      // Modificação do LADO DE ESCRITA: para MAIÚSCULAS
      const modificado = str.toUpperCase();
      // Empilha para o lado de leitura consumir
      this._queue.push(modificado);
      // Tenta drenar imediatamente
      this._read();
      cb();
    } catch (err) {
      cb(err);
    }
  }

  // Fornece dados quando alguém lê deste stream
  _read() {
    try {
      while (this._queue.length > 0) {
        // Modificação do LADO DE LEITURA: acrescenta um sufixo
        const proximo = this._queue.shift() + ' [LIDO]\n';
        // Se push retornar false, pare (backpressure)
        if (!this.push(proximo)) return;
      }
      // Se não há mais nada e o lado de escrita já acabou, sinaliza EOF
      if (this._ended && this._queue.length === 0) {
        this.push(null);
      }
    } catch (err) {
      this.destroy(err);
    }
  }
}

// ------ Demonstrações ------

// 1) Interativo: digite algo e veja a transformação
if (require.main === module && process.argv[2] !== 'file') {
  const duplex = new ModificadorDuplex();

  console.log('Digite linhas e pressione Enter (Ctrl+C para sair):');
  pipeline(process.stdin, duplex, process.stdout, (err) => {
    if (err) console.error('Pipeline erro:', err.message);
  });
}

// 2) Arquivo -> Duplex -> Arquivo
// Use: node duplex-mod.js file entrada.txt saida.txt
if (require.main === module && process.argv[2] === 'file') {
  const inFile = process.argv[3] || 'entrada.txt';
  const outFile = process.argv[4] || 'saida.txt';

  const duplex = new ModificadorDuplex();

  pipeline(
    fs.createReadStream(inFile),
    duplex,
    fs.createWriteStream(outFile),
    (err) => {
      if (err) console.error('Pipeline erro:', err.message);
      else console.log(`Transformação concluída: ${outFile}`);
    }
  );
}

module.exports = ModificadorDuplex;
