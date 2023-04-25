
    var dia = 10
    var volume = 1000
    
    for (var d = 1; d <= dia; d++) {
    
        volume = volume*2
        var soma = 0
        soma =  soma + volume
        var tot = soma/dia

    }
    console.log(`Volume total: ${soma}`)
    console.log(`Voluime mínimo: ${tot}`)