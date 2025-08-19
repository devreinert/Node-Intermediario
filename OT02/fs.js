const fs = require('fs');

const arquivoTxt = 'fs.txt';

fs.readFile(arquivoTxt, 'utf-8', (erro, conteudo) =>{
    if(erro){
        console.error("Um erro aconteceu :(", erro);
        return
    }

    console.log("Este é o texto do arquivo: ");
    console.log(conteudo);  
})