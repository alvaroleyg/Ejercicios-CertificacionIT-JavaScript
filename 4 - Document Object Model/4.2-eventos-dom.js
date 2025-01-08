// onload: se ejecuta cuando la página ha terminado de cargar
window.onload = () => {
    console.log("La página ha terminado de cargarse.")
}

// onfocus: se ejecuta cuando un elemento recibe el foco
document.getElementById("campoTexto").onfocus = () => {
    console.log("El campo de texto ha recibido el foco.")
}

// onblur: se ejecuta cuando un elemento pierde el foco
document.getElementById("campoTexto").onblur = () => {
    console.log("El campo de texto ha perdido el foco.")
}

// onchange: se ejecuta cuando el valor de un elemento ha cambiado
document.getElementById("miSelect").onchange = () => {
    console.log("El valor seleccionado ha cambiado.")
}

// onkeydown: se ejecuta cuando una tecla se presiona
document.getElementById("teclas").onkeydown = (evento) => {
    console.log(`Tecla presionada (keydown): ${evento.key}`)
}

// onkeyup: se ejecuta cuando una tecla se suelta
document.getElementById("teclas").onkeyup = (evento) => {
    console.log(`Tecla soltada (keyup): ${evento.key}`)
}

// // onkeypress: se ejecuta cuando una tecla se presiona y se suelta (no incluye teclas especiales)
// document.onkeypress("teclas").onclick = (evento) => {
//     console.log(`Se ha presionado y soltado la tecla ${evento.key}.`)
// }

// onclick: se ejecuta cuando un elemento es clicado
document.getElementById("boton").onclick = () => {
    console.log("El botón ha sido clicado.")
}

// onmouseover: se ejecuta cuando el puntero del ratón entra en un elemento
document.getElementById("area").onmouseover = () => {
    console.log("El puntero del ratón ha entrado en el area.")
}

// onmouseout: se ejecuta cuando el puntero del ratón sale de un elemento
document.getElementById("area").onmouseout = () => {
    console.log("El puntero del ratón ha salido del area.")
}
