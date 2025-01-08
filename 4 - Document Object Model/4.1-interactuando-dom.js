// Recorrer el árbol DOM de un documento HTML
function mostrarArbolDOM(nodo, nivel = 0) {
    // Imprimir el nombre del nodo y su nivel
    console.log(' '.repeat(nivel * 2) + nodo.nodeName)
    
    // Recorrer los nodos hijos
    nodo.childNodes.forEach((hijo) => {
        mostrarArbolDOM(hijo, nivel + 1);
    })
}

// Seleccionar el nodo raíz (documento)
mostrarArbolDOM(document.documentElement)



// Manipular el DOM
// Cambiar el contenido del título
document.querySelector("h1").textContent = "Bienvenido a mi página";

// Agregar un nuevo elemento a la lista
const nuevoElemento = document.createElement("li");
nuevoElemento.textContent = "Elemento 3";
document.querySelector("ul").appendChild(nuevoElemento);

// Cambiar el color del párrafo
document.querySelector("p").style.color = "blue";

