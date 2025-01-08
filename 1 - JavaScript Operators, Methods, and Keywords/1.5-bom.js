// Completar y depurar código que interactúa con el Modelo de Objetos del Navegador (BOM)

// Mostrar el tamaño de la pantalla
function showScreenSize() {
    let ancho = window.innerWidth
    let alto = window.innerHeight

    alert(`El tamaño de la pantalla es de ${ancho}px de ancho por ${alto}px de alto`)
}

showScreenSize()



// Mostrar un mensaje de confirmación
function confirmClosure() {
    let respuesta = confirm("Estás seguro de que deseas salir?")

    if (respuesta) {
        alert("Cerrando ventana...")
    } else {
        alert("Operación cancelada")
    }
}

confirmClosure()



// Solicitar el nombre del usuario
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

requestName()