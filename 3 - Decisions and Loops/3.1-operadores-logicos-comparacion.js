// Comparaciones básicas
function compararNumeros(a, b) {
    console.log(`Números: ${a} (${typeof a}) | ${b} (${typeof b})`)
    console.log(`${a} == ${b}`, a == b)
    console.log(`${a} === ${b}`, a === b)
    console.log(`${a} != ${b}`, a != b)
    console.log(`${a} !== ${b}`, a !== b)
    console.log(`${a} > ${b}`, a > b)
    console.log(`${a} < ${b}`, a < b)
}

compararNumeros(1, "1")
compararNumeros(1, 1)
compararNumeros(1, 2)



// Uso de operadores lógicos
function evaluarCondiciones(a, b, c) {
    console.log(`(${a} > ${b}) && (${b} < ${c}):`, (a > b) && (b < c));
    console.log(`(${a} > ${b}) || (${b} > ${c}):`, (a > b) || (b > c));
    console.log(`!(${a} > ${b}):`, !(a > b));
}

evaluarCondiciones(10, 5, 15);
evaluarCondiciones(5, 10, 15);



// Combinando operadores
function evaluarExpresiones(a, b) {
    if (a > b && a % 2 === 0) {
        console.log(`${a} es mayor que ${b} y es un número par.`);
    } else if (a > b || a % 2 === 0) {
        console.log(`Al menos una de las condiciones se cumple.`);
    } else {
        console.log(`Ninguna de las condiciones se cumple.`);
    }
}

evaluarExpresiones(8, 4);
evaluarExpresiones(8, 10);
evaluarExpresiones(7, 10);



// Validar rangos de valores
function estaEnRango(numero) {
    if (numero >= 1 && numero <= 10) {
        console.log(`${numero} está dentro del rango de 1 a 10.`);
    } else {
        console.log(`${numero} está fuera del rango.`);
    }
}

estaEnRango(5);
estaEnRango(15);



// Operadores encadenados
function verificarEdad(edad) {
    if (edad >= 18 && edad <= 65) {
        console.log(`La edad ${edad} está dentro del rango permitido.`);
    } else {
        console.log(`La edad ${edad} está fuera del rango permitido.`);
    }
}

verificarEdad(25);
verificarEdad(70);