// Crear una función que acepte parámetros
function sumar(a, b) {
    return a + b
}

let resultadoSuma = sumar(5, 3)
console.log("Suma:", resultadoSuma)



// Parámetros por valor: Cuando se pasan valores primitivos (números, cadenas, booleanos), la función trabaja con una copia del valor y no puede modificar el original.
function modificarValor(valor) {
    valor = valor * 2
    console.log("Dentro de la función:", valor)
}

let numero = 5
modificarValor(numero)
console.log("Fuera de la función:", numero)



// Parámetros por referencia: Cuando se pasan objetos o arrays, la función trabaja directamente con el objeto y puede modificarlo.
function modificarArray(array) {
    array.push(4)
    console.log("Dentro de la función:", array)
}

let lista = [1, 2, 3]
modificarArray(lista)
console.log("Fuera de la función:", lista)

function modificarObjeto(objeto) {
    objeto.nombre = "Juan"
    console.log("Dentro de la función:", objeto)
}

let persona = { nombre: "Ana" }
modificarObjeto(persona)
console.log("Fuera de la función:", persona)



// Crear funciones reutilizables
function calcularAreaRectangulo(base, altura) {
    return base * altura
}

console.log("El área de un rectángulo de 5x10 es:", calcularAreaRectangulo(5, 10))
console.log("El área de un rectángulo de 7x3 es:", calcularAreaRectangulo(7, 3))



// Funciones con valores por defecto
function saludar(nombre = "Invitado") {
    return `Hola, ${nombre}!`
}

console.log(saludar("Juan"))
console.log(saludar())



// Retornar múltiples valores
function calcularOperaciones(a, b) {
    return {
        suma: a + b,
        resta: a - b,
        producto: a * b,
        division: a / b
    }
}

let resultados = calcularOperaciones(10, 5)
console.log("Resultados:", resultados)
console.log("Suma:", resultados.suma)
console.log("Resta:", resultados.resta)



// Ámbito de variables
let mensaje = "Hola desde el ámbito global"

function mostrarMensajes() {
    let mensaje = "Hola desde el ámbito local"
    console.log(mensaje)
}

mostrarMensajes()
console.log(mensaje)



// Ejercicio: cálculo de IMC
function calcularIMC(peso, altura) {
    let imc = peso / (altura ** 2)
    let categoria = ""

    if (imc < 18.5) {
        categoria = "Bajo peso"
    } else if (imc >= 18.5 && imc <= 24.9) {
        categoria = "Peso normal"
    } else if (imc >= 25 && imc <= 29.9) {
        categoria = "Sobrepeso"
    } else {
        categoria = "Obesidad"
    }

    return `Tu IMC es ${imc.toFixed(2)} (${categoria})`
}

let peso = 68
let altura = 1.73
let imc = calcularIMC(peso, altura)
console.log("IMC:", imc)
