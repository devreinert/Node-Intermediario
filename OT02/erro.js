const fs = require('fs');

try {
  // Tentando ler um arquivo que não existe
  const data = fs.readFileSync('inexistente.json', 'utf8');
  console.log("Conteúdo do arquivo:", data);
} catch (err) {
  console.error("Erro ao acessar o arquivo:", err.message);
}
