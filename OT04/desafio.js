const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('log', (level, message)=>{
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level.toUpperCase()}] ${message}`);
});

eventEmitter.on('processar_dados', (data)=>{
    eventEmitter.emit('log', 'info', `Iniciando o processamento dos dados: ${data}`);

    if(!data){
        eventEmitter.emit('log', 'warn', 'Dados de entrada ausentes. Processamento cancelado');
        return;
    }

    try{
        const processedData = data.toUpperCase();
        eventEmitter.emit('log', 'info', `Dados processados com sucesso: ${processedData}`);
    }

    catch(error){
        eventEmitter.emit('log', 'error', `Erro ao processar dados: ${error.message}`);
    }
});

eventEmitter.emit('processar_dados', 'dados_teste');
console.log('-----');
eventEmitter.emit('processar_dados', null);

