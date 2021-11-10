basic.forever(function () {
    if (input.lightLevel() > 128) {
        basic.showString("Its Sunny")
    } else {
        basic.showLeds(`
            . . . . #
            . . . # #
            . . # # .
            . # # . .
            # # . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # #
            . . # # .
            . # # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . . # #
            . . # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            . . . # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # # . .
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . # # .
            . # # . .
            # # . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . # #
            . . # # .
            . # # . .
            # # . . .
            . . . . .
            `)
    }
})
