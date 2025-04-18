/**
 * FUNCTION EXPRESSION
 * Function Expression adalah function yang mengembalikan nilai function
 */

//Contoh
const greetWorld = function(message){
    console.log('Hello World')
}
greetWorld()

const convertCelsiusToFahrenheit = function(temperature){
    const result = 9/5*temperature+32
    return result
}

const temperatureInFahrenheit = convertCelsiusToFahrenheit(90)
console.log(temperatureInFahrenheit)