// Objetos y sus métodos
function workOnObjects() {

    let coche = {
        marca: "Toyota",
        modelo: "Corolla",
        año: 2020,
        encendido: false,
        encender: function () {
            this.encendido = true
            console.log(`El coche ${this.marca} ${this.modelo} está encendido`);
        },
        apagar: function () {
            this.encendido = false
            console.log(`El coche ${this.marca} ${this.modelo} está apagado`);
        }
    }

    console.log("Coche inicial:", coche)

    coche.año = 2023
    console.log(coche)

    coche.color = "Blanco"
    console.log(coche)

    delete coche.año
    console.log(coche)

    coche.encender()
    coche.apagar()
}
workOnObjects()