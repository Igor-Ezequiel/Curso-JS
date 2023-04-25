
var on = window.document.getElementById('turnOn')
var off = window.document.getElementById('turnOff')
var lamp = window.document.getElementById('Lamp')
var res = window.document.getElementById('res')

on.addEventListener('click', LampON)
lamp.addEventListener('mouseover', LampON)

res.innerHTML = ''

function LampON() {

    lamp.src = 'Lligada.png.jpg'
    on.style.background = 'Green'
    off.style.background = ''
    res.innerHTML = 'Ligada'

}

off.addEventListener('click', LampOff)
lamp.addEventListener('mouseleave', LampOff)

function LampOff() {

    lamp.src = 'Ldesligada.png.jpg'
    off.style.background = 'Red'
    on.style.background = ''
    res.innerHTML = 'Desligada'
   
}

lamp.addEventListener('dblclick' , LampQuebrada)

function LampQuebrada() {

    lamp.src = 'Lquebrada.png.jpg'
    res.innerHTML = 'Quebrada'
    off.style.background = ''
    on.style.background = ''


}
