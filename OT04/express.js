//iniciando server com express

const express = require('express');

const app = express();

app.get('/',(req, res)=>{
    res.send('Bem vindo ao servidor Express.js');
});

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
});

//--------------------------------------------------------------

//1. GET: Usado para buscar dados.
//2. POST: Usado para enviar dados ao servidor.
//3. PUT: Atualiza dados existentes.
//4. DELETE: Remove dados.

app.get('/users', (req, res)=>{
    res.json({message: 'Listando usuários'});
});

app.post('/users', (req, res)=>{
    res.json({message: 'Usuário criado'});
});

app.put('/users/:id', (req, res)=>{
    res.json({message: `Usuário ${req.params.id} atualizado`});
});

app.delete('/users/:id', (req, res)=>{
    res.json({message: `Usuário ${req.params.id} excluido`});
});

//--------------------------------------------------------------

//middleware global

app.use((req, res, next)=>{
    console.log(`Método ${req.method}, URL: ${req.url}`);
    next();
});

//--------------------------------------------------------------

//middleware especifico

app.use('/users', (req, res, next)=>{
    console.log("Middleware aplicado em apenas às rotas de /users ");
    next();
})

//-----------------------------------------------------------------------

//SQL

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sua_senha',
    database: 'projeto_node'
});

connection.connect((err)=>{
    if(err)throw err;
    console.log('Conectado ao MySQL!');

    
});

