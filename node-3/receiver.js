const Receiver = require('./sender'); 

class Receiver {
    constructor() {
        this.sender = new Sender();
        this.sender.on('event', this.handleEvent.bind(this));
    }

    handleEvent(message) {
        console.log('Kaptam egy üzenetet:', message);
    }
}

const receiver = new Receiver();