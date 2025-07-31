const fs = require('fs');

const arquivoTxt = 'texto.txt';

fs.readFile(arquivoTxt, 'utf8', (erro, dados)=>{
    if(erro){
        console.error("Um erro aconteceu :( ", erro);
        return
    }

    console.log("Este é o texto do arquivo: ");
    console.log(dados);
})


