input.onButtonPressed(Button.A, function () {
    カウンター += 1
})
input.onButtonPressed(Button.B, function () {
    if (カウンター > 3) {
        カウンター = 3
    }
    if (カウンター <= 3 && カウンター >= 1) {
        for (let index = 0; index < カウンター; index++) {
            if (x == 4) {
                led.unplot(x, y)
                x = 0
                y += 1
            } else {
                led.unplot(x, y)
                x += 1
            }
        }
        if (led.point(4, 4)) {
            カウンター = randint(1, 3)
            basic.pause(2000)
            for (let index = 0; index < カウンター; index++) {
                if (x == 4) {
                    led.unplot(x, y)
                    x = 0
                    y += 1
                } else {
                    led.unplot(x, y)
                    x += 1
                }
            }
            if (led.point(4, 4)) {
                カウンター = 0
                music.playTone(262, music.beat(BeatFraction.Whole))
            } else {
                basic.showString("you win")
                basic.showLeds(`
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    `)
                カウンター = 0
                x = 0
                y = 0
            }
        } else {
            basic.showString("you lose")
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            カウンター = 0
            x = 0
            y = 0
        }
    }
})
let y = 0
let x = 0
let カウンター = 0
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
カウンター = 0
x = 0
y = 0
