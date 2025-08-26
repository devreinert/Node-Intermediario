const mysql = require(mysql2);

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sua_senha',
    database: 'projeto_node'
});

app.get('/usuarios', (req, res) => {
    connection.querry('SELECT * FROM usuarios', (err, results)=>{
        if(err){
            res.status(500).send(err);
            return;
        }
        res.render('usuarios', {usuarios: results});
    });   
});