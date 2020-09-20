def on_button_pressed_a():
    global counter
    counter += 1
    if counter > 3:
        counter = 0
    basic.show_number(counter)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    if counter == 0:
        strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
    elif counter == 1:
        strip.show_color(neopixel.colors(NeoPixelColors.GREEN))
    elif counter == 2:
        strip.show_color(neopixel.colors(NeoPixelColors.BLUE))
    else:
        strip.show_rainbow(1, 360)
        while True:
            strip.rotate(1)
            strip.show()
            basic.pause(500)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global counter
    counter += -1
    if counter < 0:
        counter = 0
    basic.show_number(counter)
input.on_button_pressed(Button.B, on_button_pressed_b)

strip: neopixel.Strip = None
counter = 0
basic.show_number(counter)
strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)