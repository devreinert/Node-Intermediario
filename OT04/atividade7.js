const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('log', (level, message)=>{
    console.log(`[${level.toUpperCase()}] ${message}`);
});

eventEmitter.emit('log', 'info', 'Iniciando o sistema de logging');
eventEmitter.emit('log', 'warn', 'Atenção: A conexão com o banco de dados está lenta!');
eventEmitter.emit('log', 'error', 'Erro critico: Não foi possível carregar o arquivo de configurações');

const userId = '12345';
eventEmitter.emit('log', 'info', `Usuário ${userId} logou no sistema`);