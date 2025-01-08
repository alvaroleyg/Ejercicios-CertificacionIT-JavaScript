// Aplicar mejores prácticas en JavaScript -> debugger
function areaRectangulo (base, altura) {

    if (base <= 0 || altura <= 0) {
        console.log('Los valores deben ser mayores a 0')
        return
    }

    let area = base * altura;

    debugger
    console.log('La base del rectángulo es:', base)
    console.log('La altura del rectángulo es:', altura)
    console.log('El área del rectángulo es:', area)

    return area
}

let base = 10
let altura = 5
let area = areaRectangulo(base, altura)

console.log('El área del rectángulo es:', area)