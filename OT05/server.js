const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.get('/', (req, res)=>{
    const data = {title: 'SSR com Node.js', message: 'Bem-vindo ao SSR!'};
    res.render('index', data);
});

app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});