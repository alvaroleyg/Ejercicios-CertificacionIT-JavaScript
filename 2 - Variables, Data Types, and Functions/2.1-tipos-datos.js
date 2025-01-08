// Tipos de datos
function mostrarTiposDeDatos() {
    let numero = 42
    let texto = "Hola, mundo"
    let booleano = true
    let nulo = null
    let indefinido

    console.log("Número:", numero, "Tipo:", typeof numero)
    console.log("Texto:", texto, "Tipo:", typeof texto)
    console.log("Booleano:", booleano, "Tipo:", typeof booleano)
    console.log("Nulo:", nulo, "Tipo:", typeof nulo)
    console.log("Indefinido:", indefinido, "Tipo:", typeof indefinido)

    let textoComoNumero = parseInt("123")
    let booleanoComoTexto = booleano.toString()
    let numeroComoTexto = numero.toFixed(2)

    console.log("Texto como número:", textoComoNumero, "Tipo:", typeof textoComoNumero)
    console.log("Booleano como texto:", booleanoComoTexto, "Tipo:", typeof booleanoComoTexto)
    console.log("Número como texto (formateado):", numeroComoTexto, "Tipo:", typeof numeroComoTexto)
}

mostrarTiposDeDatos()
