const axios = require('axios');

async function buscaDadosApi(){
    try{
        const resposta = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log("Dados recebidos com sucesso");
        console.log(resposta.data);
    }

    catch(erro){
        console.error("Ocorreu um erro: ", erro.message);
    }
}

buscaDadosApi();