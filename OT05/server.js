const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.get('/', (req, res)=>{
    const products = [
        {name: 'Laptop', price: 2500},
        {name: 'Mouse', price: 50},
        {name: 'Teclado Mecânico', price: 300},
        {name: 'Monitor Ultrawide', price: 1800}
    ];

    const data = {
        title: 'SSR com Node.js e Produtos',
        message: 'Lista de Produtos',
        products: products
    };
    res.render('index', data);
});

app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});