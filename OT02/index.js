const http = require('http');

const hostname = '127.0.0.1'; // ou 'localhost'
const port = 3000;

// Cria o servidor
const server = http.createServer((req, res) => {
  // Define o código de status HTTP e o tipo de conteúdo
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Envia a resposta de volta para o cliente
  res.end('Bem-vindo ao Node.js!');
});

// O servidor começa a "escutar" por requisições na porta e hostname especificados
server.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});