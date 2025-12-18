input.onButtonPressed(Button.A, function () {
    basic.showNumber(pins.analogReadPin(AnalogReadWritePin.P1))
})
input.onButtonPressed(Button.AB, function () {
    fire_risk = temp * 20 / light2
    if (fire_risk <= 2) {
        basic.showString("there is a fire risk value of " + fire_risk + " low chance of fire")
    } else if (fire_risk >= 2.1 && fire_risk <= 4) {
        basic.showString("there is a fire risk value of " + fire_risk + " low chance of fire")
    } else if (fire_risk >= 4.1 && fire_risk <= 6) {
        basic.showString("there is a fire risk value of " + fire_risk + " low chance of fire")
    } else if (fire_risk >= 6.1 && fire_risk <= 8) {
        basic.showString("there is a fire risk value of " + fire_risk + " low chance of fire")
    } else {
        basic.showString("error in data")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature())
})
let light2 = 0
let temp = 0
let fire_risk = 0
basic.showIcon(IconNames.Heart)
serial.redirectToUSB()
basic.forever(function () {
    serial.writeLine("" + pins.analogReadPin(AnalogReadWritePin.P1) + "," + ("" + input.temperature()))
    light2 = pins.analogReadPin(AnalogReadWritePin.P1)
    temp = input.temperature()
    basic.pause(2000)
})
