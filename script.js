let Bhaskara = function() {    
    let a = document.getElementsByName("valueA")
    let b = document.getElementsByName("valueB")
    let c = document.getElementsByName("valueC")

    A = a[0].value
    B = b[0].value
    C = c[0].value

    let mostraResultado = function(resultado) {
        document.getElementById("formularioCalculadora")
        console.log(formularioCalculadora.innerHTML)
        formularioCalculadora.innerHTML = formularioCalculadora.innerHTML + `<label>${resultado}</label>`
    }
    
    let delta = function() {
        return B ** 2 - 4 * A * C
    }

    if (delta() < 0) {
        return mostraResultado("Delta negativo. Logo não há raízes da equação.")
    }

    delta()
    let x1 = function() {
        resX1 = ( (B * -1) + Math.sqrt(delta()) ) / (2 * A)
        return resX1
    }
    
    let x2 = function() {
        resX2 = ( (B * -1) - Math.sqrt(delta()) ) / (2 * A)
        return resX2
    }

    if (x1() == x2()) {
        return mostraResultado(`Resultado: ${x1()}`)
    } else if (x2() > x1()) {
        return mostraResultado(`Resutados: ${x2()} and ${x1()}`)
    }
    return mostraResultado(`Resultados: ${x1()} and ${x2()}`)
}



