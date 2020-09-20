input.onButtonPressed(Button.A, function () {
    counter += 1
    if (counter > 3) {
        counter = 0
    }
    basic.showNumber(counter)
})
input.onButtonPressed(Button.AB, function () {
    if (counter == 0) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    } else if (counter == 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (counter == 2) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else {
        strip.showRainbow(1, 360)
        while (true) {
            strip.rotate(1)
            strip.show()
            basic.pause(500)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    counter += -1
    if (counter < 0) {
        counter = 0
    }
    basic.showNumber(counter)
})
let strip: neopixel.Strip = null
let counter = 0
basic.showNumber(counter)
strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGBW)
strip.setBrightness(100)
