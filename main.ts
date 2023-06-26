function right () {
    basic.showLeds(`
        . . # . .
        # # # # .
        # # # # #
        # # # # .
        . . # . .
        `)
    radio.sendString("r")
}
function led2 () {
    basic.showLeds(`
        # . # . #
        . # # # .
        # # . # #
        . # # # .
        # . # . #
        `)
    radio.sendString("LED")
}
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Down, GAME_ZIP64.ZIP64ButtonEvents.Up, function () {
    stop()
})
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Down, GAME_ZIP64.ZIP64ButtonEvents.Down, function () {
    bwd()
})
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Fire1, GAME_ZIP64.ZIP64ButtonEvents.Down, function () {
    horn()
})
function fwd () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . # # # .
        `)
    radio.sendString("f")
}
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Up, GAME_ZIP64.ZIP64ButtonEvents.Up, function () {
    stop()
})
function colour () {
    basic.showLeds(`
        # . # . #
        . . . . .
        # . . . #
        . . . . .
        # . # . #
        `)
    radio.sendString("COLOUR")
}
function left () {
    basic.showLeds(`
        . . # . .
        . # # # #
        # # # # #
        . # # # #
        . . # . .
        `)
    radio.sendString("l")
}
function stop () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    radio.sendString("s")
}
input.onButtonPressed(Button.A, function () {
    increaseSpeed(-10)
})
function horn () {
    basic.showLeds(`
        . # # # .
        # . . . #
        # . # . #
        # . . . #
        . # # # .
        `)
    radio.sendString("HORN")
}
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Fire2, GAME_ZIP64.ZIP64ButtonEvents.Down, function () {
    led2()
})
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Right, GAME_ZIP64.ZIP64ButtonEvents.Up, function () {
    stop()
})
input.onGesture(Gesture.ScreenDown, function () {
    colour()
})
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Left, GAME_ZIP64.ZIP64ButtonEvents.Down, function () {
    left()
})
input.onButtonPressed(Button.B, function () {
    increaseSpeed(10)
})
function bwd () {
    basic.showLeds(`
        . # # # .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    radio.sendString("b")
}
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Left, GAME_ZIP64.ZIP64ButtonEvents.Up, function () {
    stop()
})
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Right, GAME_ZIP64.ZIP64ButtonEvents.Down, function () {
    right()
})
function increaseSpeed (adjust: number) {
    new_speed = speed + adjust
    if (new_speed >= 10 && new_speed <= 160) {
        speed = new_speed
        display.clear()
        if (speed >= 10) {
            display.setMatrixColor(0, 7, GAME_ZIP64.colors(ZipLedColors.Green))
        }
        if (speed >= 20) {
            display.setMatrixColor(1, 7, GAME_ZIP64.colors(ZipLedColors.Green))
        }
        if (speed >= 30) {
            display.setMatrixColor(2, 7, GAME_ZIP64.colors(ZipLedColors.Green))
        }
        if (speed >= 40) {
            display.setMatrixColor(3, 7, GAME_ZIP64.colors(ZipLedColors.Green))
        }
        if (speed >= 50) {
            display.setMatrixColor(4, 7, GAME_ZIP64.colors(ZipLedColors.Green))
        }
        if (speed >= 60) {
            display.setMatrixColor(5, 7, GAME_ZIP64.colors(ZipLedColors.Green))
        }
        if (speed >= 70) {
            display.setMatrixColor(6, 7, GAME_ZIP64.colors(ZipLedColors.Green))
        }
        if (speed >= 80) {
            display.setMatrixColor(7, 7, GAME_ZIP64.colors(ZipLedColors.Green))
        }
        if (speed >= 90) {
            display.setMatrixColor(0, 6, GAME_ZIP64.colors(ZipLedColors.Red))
        }
        if (speed >= 100) {
            display.setMatrixColor(1, 6, GAME_ZIP64.colors(ZipLedColors.Red))
        }
        if (speed >= 110) {
            display.setMatrixColor(2, 6, GAME_ZIP64.colors(ZipLedColors.Red))
        }
        if (speed >= 120) {
            display.setMatrixColor(3, 6, GAME_ZIP64.colors(ZipLedColors.Red))
        }
        if (speed >= 130) {
            display.setMatrixColor(4, 6, GAME_ZIP64.colors(ZipLedColors.Red))
        }
        if (speed >= 140) {
            display.setMatrixColor(5, 6, GAME_ZIP64.colors(ZipLedColors.Red))
        }
        if (speed >= 150) {
            display.setMatrixColor(6, 6, GAME_ZIP64.colors(ZipLedColors.Red))
        }
        if (speed >= 160) {
            display.setMatrixColor(7, 6, GAME_ZIP64.colors(ZipLedColors.Red))
        }
        radio.sendValue("speed", speed)
        display.show()
    }
}
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Up, GAME_ZIP64.ZIP64ButtonEvents.Down, function () {
    fwd()
})
let new_speed = 0
let display: GAME_ZIP64.ZIP64Display = null
let speed = 0
radio.setGroup(1)
speed = 10
display = GAME_ZIP64.createZIP64Display()
display.clear()
display.setBrightness(25)
GAME_ZIP64.setBuzzerPin()
increaseSpeed(0)
