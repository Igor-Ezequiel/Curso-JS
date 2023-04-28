
function fat (n) {

    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c
    }
    return fat

}


var t = 0
function fatorial(n) {
    
    if (n == 1) {

        return 1
    
    } else {


        var n3 = n * fatorial(n-1)

        return n3
          
    }

}

console.log(fatorial(5))








