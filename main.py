def on_button_pressed_a():
    basic.show_number(pins.analog_read_pin(AnalogReadWritePin.P1))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    basic.show_number(input.temperature())
input.on_button_pressed(Button.B, on_button_pressed_b)

basic.show_icon(IconNames.HEART)
serial.redirect_to_usb()

def on_forever():
    serial.write_line("" + str(pins.analog_read_pin(AnalogReadWritePin.P1)) + "," + ("" + str(input.temperature())))
    basic.pause(2000)
basic.forever(on_forever)
