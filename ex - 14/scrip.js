
function carregar() {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    
    var h = new Date()
    var hora = h.getHours()
    
    if(hora >= 0 && hora < 12){
        
        img.src = 'tarde.png.jpg'
        document.body.style.background = "#e2cd9f"
        msg.innerHTML = `Agora são ${hora} horas! Bom dia!`

    } else if(hora >= 12 && hora <= 18) {

        img.src = 'manha.png.jpg'
        document.body.style.background = "#b9846f"
        msg.innerHTML = `Agora são ${hora} horas! Boa Tarde!`

    } else {

        img.src = 'noite.png.jpg'
        document.body.style.background = "black"
        msg.innerHTML = `Agora são ${hora} horas! Boa noite!`

    }


}
