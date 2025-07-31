const fs = require('fs');

fs.readFile('usuario.json', 'utf8', (erro, dados)=>{
    if(erro){
        console.error("Um erro foi encontrado: ",(erro));
        return
    }

    const usuario = JSON.parse(dados);
    console.log("Dados do usuário:");
    console.log(usuario);
});


