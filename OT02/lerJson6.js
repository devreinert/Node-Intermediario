const fs = require('fs');

fs.readFile('usuario6.JSON', 'utf-8', (erro, data)=>{
    if(erro){
        console.error("Erro ao ler arquivo! ", erro);
        return;
    }

    const usuarioAsync = JSON.parse(data);

    console.log("Usuário (async): ", usuarioAsync);
});


