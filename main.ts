input.onButtonPressed(Button.A, function () {
    radio.sendString("left")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("startstop")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "left" && isMoving) {
        cuteBot.moveTime(cuteBot.Direction.left, 50, 0.2)
    } else if (receivedString == "right" && isMoving) {
        cuteBot.moveTime(cuteBot.Direction.right, 50, 0.2)
    } else if (receivedString == "startstop") {
        if (isMoving) {
            cuteBot.stopcar()
            isMoving = false
        } else {
            cuteBot.motors(50, 50)
            isMoving = true
        }
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("right")
})
let isMoving = false
radio.setGroup(19)
cuteBot.stopcar()
isMoving = false
