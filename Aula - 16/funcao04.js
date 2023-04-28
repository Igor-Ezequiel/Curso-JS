function fat (n) {

    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c
    }
    return fat

}


function fatorial(n) {
    
    if (n == 1) {

        return 1
    
    } else {


        return n * fatorial(n-1)
          
    }

}

console.log(fatorial(5))

function sequencia(n1) {

    if (n1 == 0) {

        return 1
    
    } else {

        if(n1 == 1) {

            return 2

        } else {

            var n4 = sequencia(n1 - 1) + sequencia(n1 - 2)
            
            return n4
   
        }
    }

}

console.log(sequencia(10))
