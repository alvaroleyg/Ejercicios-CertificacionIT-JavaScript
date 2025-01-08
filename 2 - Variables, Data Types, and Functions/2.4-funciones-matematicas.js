// Número aleatorio
function numeroAleatorio() {
    console.log("Número aleatorio:", Math.random());
}
numeroAleatorio()

// Generar un número aleatorio entre dos valores
function numeroAleatorioEntre(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Número aleatorio entre 1 y 10:", numeroAleatorioEntre(1, 10));
console.log("Número aleatorio entre 100 y 200:", numeroAleatorioEntre(0, 100));

// Redondear un número
function redondearNumeros() {
    let numero = 7.6;

    console.log("Número original:", numero);
    console.log("Redondeado hacia abajo:", Math.floor(numero));
    console.log("Redondeado hacia arriba:", Math.ceil(numero));
    console.log("Redondeado al entero más cercano:", Math.round(numero));
}
redondearNumeros();

// Calcular el máximo y mínimo de una lista
function calcularMaxMin() {
    let numeros = [5, 3, 7, 2, 8, 4, 1, 6];

    console.log("Lista de números:", numeros);
    console.log("Número máximo:", Math.max(...numeros));
    console.log("Número mínimo:", Math.min(...numeros));
}
calcularMaxMin();

// Raíces y potencias
function raicesYPotencias() {
    let numero = 9;

    console.log("Raíz cuadrada:", Math.sqrt(numero));
    console.log("Raíz cúbica:", Math.cbrt(numero));
    console.log("Número elevado a 2:", Math.pow(numero, 2));
    console.log("Número elevado a 3:", Math.pow(numero, 3));
}
raicesYPotencias();

// Valor absoluto
function valorAbsoluto() {
    let numero = -8;

    console.log("Número original:", numero);
    console.log("Valor absoluto:", Math.abs(numero));
}
valorAbsoluto();