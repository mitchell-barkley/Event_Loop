const EventEmitter = require('events');
class MyEmitter extends EventEmitter {};
const myEmitter = new MyEmitter();
myEmitter.on('martianmanhunter', () => {
    console.log('a martianmanhunter event occurred!');
});
myEmitter.addListener('deadpool', () => {
    console.log('a deadpool event occurred!');
});

console.log('martianmanhunter count: ', myEmitter.listenerCount('martianmanhunter'));
console.log('deadpool count: ', myEmitter.listenerCount('deadpool'));
console.log('events: ', myEmitter.eventNames());

myEmitter.emit('martianmanhunter');
myEmitter.emit('deadpool');

