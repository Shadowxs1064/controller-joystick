bitcommander.onEvent(BCPins.Red, BCEvents.Down, function () {
    radio.sendNumber(10)
})
bitcommander.onEvent(BCPins.Red, BCEvents.Up, function () {
    radio.sendNumber(9)
})
let y = 0
let x = 0
radio.setGroup(1)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    x = bitcommander.readJoystick(BCJoystick.X)
    y = bitcommander.readJoystick(BCJoystick.Y)
    if (y > 600 && (x < 400 && x < 600)) {
        radio.sendNumber(1)
    } else if (y < 400 && (x < 400 && x < 600)) {
        radio.sendNumber(2)
    } else if (x < 400 && (y < 400 && y < 600)) {
        radio.sendNumber(3)
    } else if (x > 600 && (y < 400 && y < 600)) {
        radio.sendNumber(4)
    } else if (y > 600 && x < 400) {
        radio.sendNumber(5)
    } else if (y > 600 && x < 600) {
        radio.sendNumber(6)
    } else if (y > 400 && x < 400) {
        radio.sendNumber(7)
    } else if (y > 400 && x < 600) {
        radio.sendNumber(8)
    } else {
        radio.sendNumber(0)
    }
})
