input.onButtonPressed(Button.A, function () {
    basic.showNumber(pins.analogReadPin(AnalogReadWritePin.P1))
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature())
})
basic.showIcon(IconNames.Heart)
serial.redirectToUSB()
basic.forever(function () {
    serial.writeLine("" + pins.analogReadPin(AnalogReadWritePin.P1) + "," + input.temperature())
})
