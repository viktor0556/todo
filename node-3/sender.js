const EventEmitter = require('events');

class Sender extends EventEmitter {
    sendMessage(message) {
        this.emit('event', message);
    }
}

module.exports = Sender;