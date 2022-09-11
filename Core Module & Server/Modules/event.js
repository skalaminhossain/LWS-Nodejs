const EventEmitter = require('events');
const emitter = EventEmitter();

//register a listener for event

emitter.on('belling' , ({ period , text }) => {
    console.log(`we need to run for ${period} ${text}`)
})

emitter.emit('belling' , {
    period : "first",
    text : 'Perioad end'
})
