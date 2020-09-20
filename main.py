def on_button_pressed_a():
    global LED숫자, LED타이머
    LED숫자 += 1
    LED숫자 = LED숫자 % 4
    basic.show_number(LED숫자)
    LED타이머 = 6
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    global 램프상태, LED타이머
    if 램프모드 == 1:
        if 램프상태 == 0:
            램프상태 = 1
        else:
            램프상태 = 0
    basic.show_number(LED숫자)
    LED타이머 = 6
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_button_pressed_ab():
    global 램프모드, 램프상태, LED타이머
    램프모드 = 0
    if 램프상태 == 1:
        램프상태 = 0
    else:
        램프상태 = 1
    basic.show_number(LED숫자)
    LED타이머 = 6
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global 램프모드, LED타이머
    램프모드 += 1
    램프모드 = 램프모드 % 3
    basic.show_number(램프모드)
    LED타이머 = 6
input.on_button_pressed(Button.B, on_button_pressed_b)

램프상태 = 0
램프모드 = 0
LED타이머 = 0
LED숫자 = 0
basic.show_number(LED숫자)
strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
strip.set_brightness(100)

def on_forever():
    global 램프상태
    if 램프모드 == 2:
        if input.light_level() < 60:
            램프상태 = 1
        else:
            램프상태 = 0
    basic.pause(500)
basic.forever(on_forever)

def on_forever2():
    if 램프상태 == 1:
        if LED숫자 == 0:
            strip.show_color(neopixel.colors(NeoPixelColors.ORANGE))
        elif LED숫자 == 1:
            strip.show_color(neopixel.colors(NeoPixelColors.GREEN))
        elif LED숫자 == 2:
            strip.show_color(neopixel.colors(NeoPixelColors.YELLOW))
        else:
            strip.show_rainbow(1, 360)
            while LED숫자 == 3 and 램프상태 == 1:
                strip.rotate(1)
                strip.show()
                basic.pause(500)
    else:
        strip.clear()
        strip.show()
    basic.pause(500)
basic.forever(on_forever2)

def on_forever3():
    global LED타이머
    if LED타이머 > 0:
        LED타이머 += -1
        if LED타이머 == 0:
            basic.clear_screen()
    basic.pause(500)
basic.forever(on_forever3)
