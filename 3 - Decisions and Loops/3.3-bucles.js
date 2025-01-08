// Bucle for
function imprimirNumerosFor() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

imprimirNumerosFor();



// Bucle while
function imprimirNumerosWhile() {
    let i = 1;
    while (i <= 10) {
        console.log(i);
        i++;
    }
}

imprimirNumerosWhile();



// Bucle for in
const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};

function imprimirPropiedades() {
    for (let propiedad in persona) {
        console.log(`${propiedad}: ${persona[propiedad]}`);
    }
}

imprimirPropiedades();



// Break y continue
function imprimirNumerosConControl() {
    for (let i = 1; i <= 10; i++) {
        if (i === 5) {
            continue;
        }
        if (i === 8) {
            break;
        }
        console.log(i);     
    }
}

imprimirNumerosConControl();
