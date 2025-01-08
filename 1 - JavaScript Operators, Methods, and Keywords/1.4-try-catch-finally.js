// Implementar manejo de excepciones
function convertToNumber(string) {
    try {
        let number = parseInt(string);

        if (isNaN(number)) {
            throw new Error('The value is not a number');
        }
        
        console.log('The number is:', number);

    } catch (error) {
        console.log("Error:", error.message);

    } finally {
        console.log('This is finally block');
    }
}

console.log(convertToNumber('10'));
console.log(convertToNumber('Hola'));
console.log(convertToNumber(''));
console.log(convertToNumber('0'));
console.log(convertToNumber('0.5'));
console.log(convertToNumber('10.5'));