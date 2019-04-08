var events = require('events');
var emitter = new events.EventEmitter();

var Person = require('../modules/person');

emitter.on('customEvent', (message, status) => {
    console.log(`${status}: ${message}`)
});

emitter.emit('customEvent', 'Hello World', 200);

var ben = new Person("Ben Franklin");
var george = new Person("George Washington");

ben.on('speak', (said) => {
    console.log(`${this.name}: ${said}`);
});

ben.on('speak', (said) => {
    console.log(`${this.name}: ${said}`);
});

ben.emit('speak', "You may delay, but time will not");
george.emit('speak', "Different thing");

