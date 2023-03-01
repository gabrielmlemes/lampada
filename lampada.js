const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = 'img/ligada.jpg'
    }   
}
turnOn.addEventListener ('click', lampOn)


function lampOff() {
    if (!isLampBroken()) {
        lamp.src = 'img/desligada.jpg'
    }   
}
turnOff.addEventListener ('click', lampOff)


function broke() {
    lamp.src ='img/quebrada.jpg'
}
lamp.addEventListener ('dblclick', broke)




lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseout', lampOff)

