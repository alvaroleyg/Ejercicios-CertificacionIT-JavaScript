// Sentencias if, else if y else
function clasificarEdad(edad) {
    if (edad < 18) {
        console.log("Eres menor de edad.")
    } else if (edad >= 18 && edad <= 64) {
        console.log("Eres adulto.")
    } else {
        console.log("Eres persona mayor.")
    }
}

clasificarEdad(15)
clasificarEdad(25)
clasificarEdad(70)



// Sentencias switch
function clasificarNumero(num) {
    switch (num) {
        case 1:
            console.log("Uno")
            break
        case 2:
            console.log("Dos")
            break
        case 3:
            console.log("Tres")
            break
        default:
            console.log("Número no reconocido")
            break
    }
}

clasificarNumero(1)
clasificarNumero(3)
clasificarNumero(5)
