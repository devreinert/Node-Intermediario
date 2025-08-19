const http = require('http');

const server = http.createServer((req, res)=>{
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    if(req.url === '/'){
        res.statusCode = 200;
        res.end("Você está na página inicial!");
    }

    else if(req.url === "/sobre"){
        res.statusCode = 200;
        res.end("Você está na página sobre!");
    }

    else if(req.url === "/contato"){
        res.statusCode = 200;
        res.end("Você está na página de contatos!");
    }
});

server.listen(3000, ()=>{
    console.log('Servidor rodando em http://localhost:3000');
});