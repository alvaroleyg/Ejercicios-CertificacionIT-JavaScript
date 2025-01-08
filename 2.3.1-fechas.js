
// Fechas
function createAndShowDates() {
    let fechaActual = new Date()
    console.log("Fecha actual:", fechaActual)

    let fechaEspecifica = new Date(2023, 0, 15, 10, 30, 0) // Año, Mes (0=Enero), Día, Hora, Minuto, Segundo
    console.log("Fecha de ejemplo:", fechaEspecifica)

    let fechaFutura = new Date(fechaActual.getTime() + 10000000000)
    console.log("Fecha futura:", fechaFutura)

    let fechaPasada = new Date(fechaActual.getTime() - 10000000000)
    console.log("Fecha pasada:", fechaPasada)

    console.log("Año:", fechaActual.getFullYear())
    console.log("Mes (0-11):", fechaActual.getMonth()) // Enero = 0
    console.log("Día del mes:", fechaActual.getDate())
    console.log("Día de la semana (0-6):", fechaActual.getDay()) // Domingo = 0
    console.log("Hora:", fechaActual.getHours())
    console.log("Minutos:", fechaActual.getMinutes())
    console.log("Segundos:", fechaActual.getSeconds())
    console.log("Milisegundos:", fechaActual.getMilliseconds())
}
createAndShowDates()

// Sumar y restar días
function sumarYRestarDias() {
    let fecha = new Date()

    console.log("Fecha original:", fecha)

    // Sumar 7 días
    fecha.setDate(fecha.getDate() + 7)
    console.log("Después de sumar 7 días:", fecha)

    // Restar 30 días
    fecha.setDate(fecha.getDate() - 30)
    console.log("Después de restar 30 días:", fecha)
}
sumarYRestarDias()

// Comparar fechas
function compararFechas() {
    let fecha1 = new Date(2023, 0, 1) // 1 de enero de 2023
    let fecha2 = new Date(2023, 11, 31) // 31 de diciembre de 2023

    console.log("Fecha 1:", fecha1)
    console.log("Fecha 2:", fecha2)

    if (fecha1 < fecha2) {
        console.log("La fecha 1 es anterior a la fecha 2")
    } else if (fecha1 > fecha2) {
        console.log("La fecha 1 es posterior a la fecha 2")
    } else {
        console.log("Las fechas son iguales")
    }
}
compararFechas()

// Formatear fechas
function formatearFechas() {
    let fecha = new Date()

    // Formato regional
    console.log("Fecha formateada (locale):", fecha.toLocaleString())
    console.log("Solo fecha (locale):", fecha.toLocaleDateString())
    console.log("Solo hora (locale):", fecha.toLocaleTimeString())

    // Formato ISO
    console.log("Formato ISO:", fecha.toISOString())
}
formatearFechas()

// Calcular la diferencia entre dos fechas
function calcularDiferenciaFechas() {
    let nacimiento = new Date(1992, 0, 16)
    let hoy = new Date()

    let diferencia = hoy - nacimiento
    console.log("Diferencia en milisegundos:", diferencia)

    let dias = diferencia / (1000 * 60 * 60 * 24)
    console.log("Diferencia en días:", dias)
}
calcularDiferenciaFechas()

// Cuenta regresiva a una fecha
function cuentaRegresiva() {
    let fechaEvento = new Date(2025, 0, 16) 
    let ahora = new Date()

    let tiempoRestante = fechaEvento - ahora // Diferencia en milisegundos
    let dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24))
    let horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60))
    let segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000)

    console.log(`Faltan ${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos para el evento.`)
}
cuentaRegresiva()
