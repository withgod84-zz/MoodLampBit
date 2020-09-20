input.onButtonPressed(Button.A, function () {
    LED숫자 += 1
    if (LED숫자 == 4) {
        LED숫자 = 0
    }
    basic.showNumber(LED숫자)
})
input.onGesture(Gesture.Shake, function () {
    if (램프상태 == 0) {
        램프상태 = 1
    } else {
        램프상태 = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (램프상태 == 0) {
        램프상태 = 1
    } else {
        램프상태 = 0
    }
})
let 램프상태 = 0
let LED숫자 = 0
basic.showNumber(LED숫자)
let strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
strip.setBrightness(100)
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
            while (LED숫자 == 3 && true) {
                strip.rotate(1)
                strip.show()
                basic.pause(1000)
            }
        }
    } else {
        strip.clear()
        strip.show()
    }
    basic.pause(1000)
})
