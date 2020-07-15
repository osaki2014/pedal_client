let pitch = 0
radio.setGroup(99)
radio.setTransmitSerialNumber(true)
let name = "1"
basic.forever(function () {
    pitch = input.rotation(Rotation.Pitch)
    radio.sendValue(name, pitch)
})
basic.forever(function () {
    basic.showString(name)
    basic.showNumber(parseFloat(name))
    basic.showNumber(pitch)
    basic.pause(200)
})
