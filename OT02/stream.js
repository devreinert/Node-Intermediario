const fs = require('fs');

console.log("Gearando arquivo grande!");

const file = fs.createWriteStream('./stream.txt');

for(let i = 0; i <= 1e6; i++){
    file.write('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet quam ac ligula.\n');

}

file.end();

console.log("Arquivo grande gerado com sucesso");