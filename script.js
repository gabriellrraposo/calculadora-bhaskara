let Bhaskara = function() {    
    let a = document.getElementsByName("valueA")
    let b = document.getElementsByName("valueB")
    let c = document.getElementsByName("valueC")

    A = a[0].value
    B = b[0].value
    C = c[0].value

    let delta = function() {
        return B ** 2 - 4 * A * C
    }

    if (delta() < 0) {
        return "Delta negativo. Logo não há raízes da equação."
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

    if (x1 == x2) {
        return `Resultado: ${x1()}`
    } else if (x2() > x1()) {
        return `Resutados: ${x2()} and ${x1()}`
    }
    return `Resultados: ${x1()} and ${x2()}`
}

