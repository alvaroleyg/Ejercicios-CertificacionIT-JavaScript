// Completar y depurar código que interactúa con el Modelo de Objetos del Navegador (BOM)
function showScreenSize() {
    let ancho = window.innerWidth
    let alto = window.innerHeight

    alert(`El tamaño de la pantalla es de ${ancho}px de ancho por ${alto}px de alto`)
}

function confirmClosure() {
    let respuesta = confirm("Estás seguro de que deseas salir?")

    if (respuesta) {
        alert("Cerrando ventana...")
    } else {
        alert("Operación cancelada")
    }
}

function requestName() {
    let nombre = ""

    while (!nombre) {
        nombre = prompt('Cual es tu nombre?', "Introduce aquí tu nombre")

        if (!nombre) {
            alert("No ingresaste un nombre. Por favor, inténtalo de nuevo.")
        }
    }

    alert(`Hola, ${nombre}!`);
}

showScreenSize()
confirmClosure()
requestName()