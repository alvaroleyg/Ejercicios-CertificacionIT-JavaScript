// Arrays y sus métodos
function workOnArrays() {
    let frutas = ["Mango", "Arándanos", "Cacao", "Granada", "Piña"]

    console.log("Arreglo inicial:", frutas)

    frutas.push("Cereza")
    console.log(frutas)

    frutas.pop()
    console.log(frutas)

    frutas.unshift("Uva")
    console.log(frutas)

    frutas.shift()
    console.log(frutas)

    frutas.forEach((fruta, indice) => {
        console.log(`${indice}: ${fruta}`)
    })

    frutas.sort()
    console.log(frutas)

    let resultado = frutas.find(fruta => fruta === "Granada")
    console.log("Resultado de la búsqueda:", resultado)

    let matriz = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
    console.log("Elemento en la posición [1][2]:", matriz[1][2])
}

workOnArrays()