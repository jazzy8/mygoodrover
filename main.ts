function reset_rover () {
    led.enable(true)
    images.createImage(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # # # # #
        # # . # #
        # # # # #
        # # # # #
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `).showImage(0, 50)
    images.createImage(`
        # # # # #
        # . . . #
        # . # . #
        # . . . #
        # # # # #
        `).showImage(0, 50)
    images.createImage(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `).showImage(0, 50)
    images.createImage(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `).showImage(0, 50)
    images.createImage(`
        # . # . #
        . # # # .
        # # . # #
        . # # # .
        # . # . #
        `).showImage(0, 50)
    images.createImage(`
        # . # . #
        . . . . .
        # . . . #
        . . . . .
        # . # . #
        `).showImage(0, 50)
    basic.clearScreen()
    control.reset()
}
radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        x = value
    }
    if (name == "y") {
        y = value
    }
    if (name == "z") {
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Double))
    }
})
let y = 0
let x = 0
radio.setGroup(255)
music.setBuiltInSpeakerEnabled(true)
pins.setAudioPin(AnalogPin.P4)
led.enable(false)
x = 0
y = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.pause(3000)
        if (input.buttonIsPressed(Button.AB)) {
            reset_rover()
        }
    }
})
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
