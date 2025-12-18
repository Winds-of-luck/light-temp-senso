input.onButtonPressed(Button.A, function () {
    basic.showNumber(pins.analogReadPin(AnalogReadWritePin.P1))
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature())
})
let temp = 0
let light2 = 0
let brightness = ""
basic.showIcon(IconNames.Heart)
serial.redirectToUSB()
basic.forever(function () {
    serial.writeLine("" + pins.analogReadPin(AnalogReadWritePin.P1) + "," + input.temperature() + "," + brightness)
    basic.pause(2000)
})
basic.forever(function () {
    light2 = pins.analogReadPin(AnalogReadWritePin.P1)
    temp = input.temperature()
    if (light2 >= 1000) {
        brightness = "pitch black"
    } else if (light2 >= 800 && light2 <= 1000) {
        brightness = "very dark"
    } else if (light2 >= 600 && light2 <= 800) {
        brightness = "slightly dark"
    } else if (light2 >= 400 && light2 <= 600) {
        brightness = "normal light"
    } else if (light2 >= 0 && light2 <= 400) {
        brightness = "bright"
    } else {
        brightness = "bad data"
    }
    if (light2 <= 300) {
        music.play(music.stringPlayable("A A A A C5 B E B ", 130), music.PlaybackMode.UntilDone)
    }
})
