function right () {
    for (let index = 0; index < 4; index++) {
        plot()
        x += 1
    }
}
function up () {
    for (let index = 0; index < 4; index++) {
        plot()
        y += -1
    }
}
function left () {
    for (let index = 0; index < 4; index++) {
        plot()
        x += -1
    }
}
function plot () {
    led.plot(x, y)
    basic.pause(time)
    led.unplot(x, y)
}
input.onButtonPressed(Button.A, function () {
    time = time * 0.85
})
input.onButtonPressed(Button.B, function () {
    time = time * 1.15
})
function down () {
    for (let index = 0; index < 4; index++) {
        plot()
        y += 1
    }
}
let y = 0
let x = 0
let time = 0
time = 100
x = 0
y = 0
basic.forever(function () {
    right()
    down()
    left()
    up()
})
