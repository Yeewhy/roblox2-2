input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . # . .
        . # # # .
        . . # . #
        . # . # .
        . # . # .
        `)
    basic.showString("Hello!")
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . # . # .
        . # . # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . # . #
        . # # # .
        . . # . .
        . # . # .
        . # . # .
        `)
    basic.showString("YAY!")
})
basic.showLeds(`
    . . # . .
    . # # # .
    # . # . #
    . # . # .
    . # . # .
    `)
