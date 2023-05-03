var numf = window.document.getElementById('fnum')

var butini = window.document.getElementById('but1')
var butf = window.document.getElementById('but2')

var lista = window.document.getElementById('flista')

var res = window.document.getElementById('res')

let valores = []

butini.addEventListener('click', clicar)

function isNumero(n) {

    if (n >= 1 && n <=100) {

        return true
        
    } else {

        return false
    
    }
}

function inLista(n, l) {

    if (l.indexOf(n) != -1) {

        return true
    
    } else {

        return false

    }   

}

function clicar() {

    var num = Number(numf.value)

    if (isNumero(num) && !inLista(num, valores)) {

        alert('ok')

    } else {

        alert('nao')

    }
}