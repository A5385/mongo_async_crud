const logEvents = require('./logEvents');

const EventEmmiter = require('events');

class MyEmmitter extends EventEmmiter { };

// initialize object
const myEmmitter = new MyEmmitter();

// add listner for the log event
myEmmitter.on('log', (msg) => logEvents(msg));

setTimeout(() => {
    //Emit event
    myEmmitter.emit('log', 'Log event emitted!');

}, 2000);