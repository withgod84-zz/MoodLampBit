input.onButtonPressed(Button.A, function () {
    LED숫자 += 1
    LED숫자 = LED숫자 % 4
    basic.showNumber(LED숫자)
    LED타이머 = 6
})
input.onGesture(Gesture.Shake, function () {
    if (램프모드 == 1) {
        if (램프상태 == 0) {
            램프상태 = 1
        } else {
            램프상태 = 0
        }
    }
    basic.showNumber(LED숫자)
    LED타이머 = 6
})
input.onButtonPressed(Button.AB, function () {
    램프모드 = 0
    if (램프상태 == 1) {
        램프상태 = 0
    } else {
        램프상태 = 1
    }
    basic.showNumber(LED숫자)
    LED타이머 = 6
})
input.onButtonPressed(Button.B, function () {
    램프모드 += 1
    램프모드 = 램프모드 % 3
    basic.showNumber(램프모드)
    LED타이머 = 6
})
let 램프상태 = 0
let 램프모드 = 0
let LED타이머 = 0
let LED숫자 = 0
basic.showNumber(LED숫자)
let strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGBW)
strip.setBrightness(100)
basic.forever(function () {
    if (램프모드 == 2) {
        if (input.lightLevel() < 25) {
            램프상태 = 1
        } else {
            램프상태 = 0
        }
    }
    basic.pause(500)
})
basic.forever(function () {
    if (램프상태 == 1) {
        if (LED숫자 == 0) {
            strip.showColor(neopixel.colors(NeoPixelColors.Orange))
        } else if (LED숫자 == 1) {
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
        } else if (LED숫자 == 2) {
            strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        } else {
            strip.showRainbow(1, 360)
            while (LED숫자 == 3 && 램프상태 == 1) {
                strip.rotate(1)
                strip.show()
                basic.pause(500)
            }
        }
    } else {
        strip.clear()
        strip.show()
    }
    basic.pause(500)
})
basic.forever(function () {
    if (LED타이머 > 0) {
        LED타이머 += -1
        if (LED타이머 == 0) {
            basic.clearScreen()
        }
    }
    basic.pause(500)
})
