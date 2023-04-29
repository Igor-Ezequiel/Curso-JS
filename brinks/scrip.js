var num = window.document.getElementById('num')
var but = window.document.getElementById('but')
but.addEventListener('click', clicar)
var res = window.document.getElementById('ress')



function clicar () {

    var n = Number(num.value)
    
    function ruffini(n) {
    
        if (n == 0) {
           
            return 1
        
        } else {
            
            if (n == 1) {
    
                return 2
    
            } else
     
            return ruffini(n-1) + ruffini(n-2) 
    
        }
    
    }

    
    var tex = document.createElement('option')
    tex.text = `${ruffini(n)}`
    res.appendChild(tex)   
}









