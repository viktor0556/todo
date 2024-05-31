const EventEmitter = require('events');

const myEmitter = new EventEmitter();

const mySecondEmitter = new EventEmitter();

const eventHandler = () => {
  console.log('Az esemény bekövetkezett!')
};

myEmitter.on('event', (message="Hello world", number="42") => {
  setInterval(() => {
    console.log('Az "event" esemény bekövetkezett!');
  }, 2000);
  setInterval(() => {
    console.log(`Az újabb "event" esemény bekövetkezett. \nÜzenet: ${message},\nSzám: ${number} `);
  }, 10000);
});

myEmitter.emit('event')

mySecondEmitter.on('event2', () => {
  setTimeout(() => {
    mySecondEmitter.off('event2', eventHandler);
    console.log('Az eseménykezelő eltávolítva')
  }, 5000);
});

setTimeout(() => {
  mySecondEmitter.emit('event2')
}, 5000)