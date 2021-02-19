radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        x = value
    }
    if (name == "y") {
        y = value
    }
})
let y = 0
let x = 0
radio.setGroup(255)
x = 0
y = 0
basic.forever(function () {
    if (x == 0 && y > 0) {
        pins.analogWritePin(AnalogPin.P0, 768 + y)
        pins.analogWritePin(AnalogPin.P1, 0)
        pins.analogWritePin(AnalogPin.P2, 768 + y)
        pins.analogWritePin(AnalogPin.P3, 0)
    } else if (x == 0 && y < 0) {
        pins.analogWritePin(AnalogPin.P1, 768 + y)
        pins.analogWritePin(AnalogPin.P0, 0)
        pins.analogWritePin(AnalogPin.P3, 768 + y)
        pins.analogWritePin(AnalogPin.P2, 0)
    } else if (x > 0 && y > 0) {
        pins.analogWritePin(AnalogPin.P0, 0)
        pins.analogWritePin(AnalogPin.P1, 0)
        pins.analogWritePin(AnalogPin.P2, 768 + y)
        pins.analogWritePin(AnalogPin.P3, 0)
    } else if (x < 0 && y > 0) {
        pins.analogWritePin(AnalogPin.P0, 768 + y)
        pins.analogWritePin(AnalogPin.P1, 0)
        pins.analogWritePin(AnalogPin.P2, 0)
        pins.analogWritePin(AnalogPin.P3, 0)
    } else if (x > 0 && y < 0) {
        pins.analogWritePin(AnalogPin.P0, 0)
        pins.analogWritePin(AnalogPin.P1, 768 + y)
        pins.analogWritePin(AnalogPin.P2, 0)
        pins.analogWritePin(AnalogPin.P3, 0)
    } else if (x < 0 && y < 0) {
        pins.analogWritePin(AnalogPin.P0, 0)
        pins.analogWritePin(AnalogPin.P1, 0)
        pins.analogWritePin(AnalogPin.P2, 0)
        pins.analogWritePin(AnalogPin.P3, 768 + y)
    } else if (x > 0 && y == 0) {
        pins.analogWritePin(AnalogPin.P0, 0)
        pins.analogWritePin(AnalogPin.P1, 768 + y)
        pins.analogWritePin(AnalogPin.P2, 768 + y)
        pins.analogWritePin(AnalogPin.P3, 0)
    } else if (x < 0 && y == 0) {
        pins.analogWritePin(AnalogPin.P0, 768 + y)
        pins.analogWritePin(AnalogPin.P1, 0)
        pins.analogWritePin(AnalogPin.P2, 0)
        pins.analogWritePin(AnalogPin.P3, 768 + y)
    } else if (x == 0 && y == 0) {
        pins.analogWritePin(AnalogPin.P0, 0)
        pins.analogWritePin(AnalogPin.P1, 0)
        pins.analogWritePin(AnalogPin.P2, 0)
        pins.analogWritePin(AnalogPin.P3, 0)
    }
})
