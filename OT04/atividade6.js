const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('hello', (name)=>{
    console.log(`Hello, ${name}`);
});

eventEmitter.emit('hello', 'Guilherme');

