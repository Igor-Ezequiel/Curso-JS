function verificar() {
 
    var a = window.document.getElementById('txtano') // ano de nascimento
    var anoN = Number(a.value)
    var res = window.document.getElementById('res') // resultado
    
    var d = new Date()
    var data = d.getFullYear() // ano atual
    

    if(anoN > data || anoN < 1923) {

        alert('ERRO! Ano de nascimento > que o ano atual!')

    } else {

        var sex = window.document.getElementsByName('radsex')
        var idade = data - anoN

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(sex[0].checked) {
            
            var genero = 'homem'
            document.body.style.background = 'blue'
            

            if(idade >=0 && idade < 10) {

                img.setAttribute('src', 'foto.bebeM.png.jpg')

            } else if (idade >=10 && idade < 18) {

                img.setAttribute('src', 'foto.jovemM.png.jpg')

            } else if (idade >= 18 && idade < 50) {

                img.setAttribute('src', 'foto.adulto.png.jpg')

            } else {

                img.setAttribute('src', 'foto.idoso.png.jpg')
            
            }

        } else if(sex[1].checked) {

            var genero = 'Mulher'
            document.body.style.background = 'yellow'

            if(idade >=0 && idade < 10) {

                img.setAttribute('src', 'foto.bebeF.png.jpg')

            } else if (idade >=10 && idade < 18) {

                img.setAttribute('src', 'foto.jovemF.png.jpg')

            } else if (idade >= 18 && idade < 50) {

                img.setAttribute('src', 'foto.adulta.png.jpg')

            } else {

                img.setAttribute('src', 'foto.idosa.png.jpg')

            }
        }

        res.innerHTML = `${genero} de ${idade} anos`
        res.appendChild(img)

    }

}