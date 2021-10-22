const { LedGenerator } = require("./LedGenerator");

let ledState = []

function updateLeds(newLed) {
    const index = ledState.findIndex(led => led.ledId === newLed.ledId)

    const updatedLeds = [...ledState]; 
    updatedLeds[index] = newLed
    
    ledState = updatedLeds
}

function getLedState() {
    return ledState;
}

function initializeLedState() {
    ledState = LedGenerator(30) 
}

exports.updateLeds = updateLeds
exports.getLedState = getLedState
exports.initializeLedState = initializeLedState
