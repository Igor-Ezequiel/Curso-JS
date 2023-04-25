function clicar() {

    var bg = window.document.getElementsByName('rada')
    var ama = window.document.getElementsByName('radb')
    var m = window.document.getElementsByName('radc')
    var tp = window.document.getElementsByName('radd')
    var ep = window.document.getElementsByName('rade')
    var v = window.document.getElementsByName('radf')
    
    var res = window.document.getElementById('sec2')
    
    if(bg[1].checked) {

        if(ama[0].checked || ep[0].checked) {

            res.innerHTML = 'Lixo não identificado!'

        } if(ama[1].checked) {

            if(tp[1].checked) {

                if(ep[1].checked) {

                    if(v[0].checked && m[0].checked) {

                        res.innerHTML ='Daddy'

                    }
                }
            }

        } else if(ama[2].checked) { 

            if(tp[1].checked) {

                if(ep[1].checked) {

                    if(v[0].checked && m[0].checked) {

                        res.innerHTML ='Bull'

                    } else if (m[1].checked) {

                        if(v[1].checked) {

                            res.innerHTML = 'Fabiano'

                        } else 

                        res.innerHTML ='LG'

                    } 

                }
            }
        }
         
    } else if(bg[0].checked) {


    }
 
}