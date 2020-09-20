input.onButtonPressed(Button.A, function () {
    LED숫자 += 1
    LED숫자 = LED숫자 % 1
    basic.showNumber(LED숫자)
})
input.onGesture(Gesture.Shake, function () {
    if (램프모드 == 0) {
        램프모드 += 1
        램프모드 = 램프모드 % 1
    }
})
input.onButtonPressed(Button.AB, function () {
    if (램프상태 == 1) {
        램프상태 = 0
    } else {
        램프상태 = 1
    }
})
input.onButtonPressed(Button.B, function () {
    램프모드 += 1
    램프모드 = 램프모드 % 1
})
let 램프상태 = 0
let 램프모드 = 0
let LED숫자 = 0
basic.showNumber(LED숫자)
let strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
strip.setBrightness(100)
basic.forever(function () {
    if (램프모드 == 2) {
        if (input.lightLevel() == 1) {
            램프상태 = 1
        } else {
            램프상태 = 0
        }
    }
})
basic.forever(function () {
    if (램프상태 == 1) {
        if (LED숫자 == 0) {
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
        } else if (LED숫자 == 1) {
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
        } else if (LED숫자 == 2) {
            strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        } else {
            strip.showRainbow(1, 360)
            while (true) {
                strip.rotate(1)
                strip.show()
            }
        }
    }
    basic.pause(500)
})
