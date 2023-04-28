

var num = window.document.getElementById('num')
var res = window.document.getElementById('res')

var b = window.document.getElementById('but')
b.addEventListener('click', clicar)


function clicar() {

    if (num.value.length == 0) {

        window.alert('Nenhum número digitado!')
    
    } else {

        var n = Number(num.value)
       
        var c = 1
        while(c <= 10) {
            
            var mostrar = document.createElement('option')
            mostrar.text = `${n} x ${c} = ${n*c}`
            res.appendChild(mostrar)
            c++
            
        }
    }
        

}