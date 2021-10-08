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
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Down, GAME_ZIP64.ZIP64ButtonEvents.Up, function () {
    stop()
})
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Down, GAME_ZIP64.ZIP64ButtonEvents.Down, function () {
    bwd()
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
    increaseSpeed(-25)
})
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Right, GAME_ZIP64.ZIP64ButtonEvents.Up, function () {
    stop()
})
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Left, GAME_ZIP64.ZIP64ButtonEvents.Down, function () {
    left()
})
input.onButtonPressed(Button.B, function () {
    increaseSpeed(25)
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
    if (new_speed >= 25 && new_speed <= 200) {
        speed = new_speed
        display.clear()
        if (speed >= 25) {
            display.setMatrixColor(0, 7, GAME_ZIP64.colors(ZipLedColors.Green))
        }
        if (speed >= 50) {
            display.setMatrixColor(1, 7, GAME_ZIP64.colors(ZipLedColors.Green))
        }
        if (speed >= 75) {
            display.setMatrixColor(2, 7, GAME_ZIP64.colors(ZipLedColors.Green))
        }
        if (speed >= 100) {
            display.setMatrixColor(3, 7, GAME_ZIP64.colors(ZipLedColors.Green))
        }
        if (speed >= 125) {
            display.setMatrixColor(4, 7, GAME_ZIP64.colors(ZipLedColors.Green))
        }
        if (speed >= 150) {
            display.setMatrixColor(5, 7, GAME_ZIP64.colors(ZipLedColors.Green))
        }
        if (speed >= 175) {
            display.setMatrixColor(6, 7, GAME_ZIP64.colors(ZipLedColors.Green))
        }
        if (speed >= 200) {
            display.setMatrixColor(7, 7, GAME_ZIP64.colors(ZipLedColors.Green))
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
speed = 25
display = GAME_ZIP64.createZIP64Display()
display.clear()
display.setBrightness(25)
GAME_ZIP64.setBuzzerPin()
increaseSpeed(0)
basic.forever(function () {
	
})
