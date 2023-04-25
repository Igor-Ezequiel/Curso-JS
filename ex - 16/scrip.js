
function clicar() {

    var ini = window.document.getElementById('txt1')
    var fi = window.document.getElementById('txt2')
    var pas = window.document.getElementById('txt3')
    var res = window.document.getElementById('res')

    if (ini.value.length == 0 || fi.value.length == 0 || pas.value.length == 0) {

        res.innerHTML = 'Um valor deixou de ser registrado!'

    } else {
        
        res.innerHTML = 'Contando... </br> '
        var i = Number(ini.value)
        var f = Number(fi.value)
        var p = Number(pas.value)

        if(p <= 0 ) {

            window.alert('Erro! considere passo = 1')
            p = 1

        }

        if(i < f) {

            for (var c = i; c <= f; c += p) {

                res.innerHTML += ` ${c} \u{1F449} `

            }

        } else { 

            for (var c = i; c >= f; c -= p) {

                res.innerHTML += ` ${c} \u{1F449} `


            }

        }

    }
        
}














