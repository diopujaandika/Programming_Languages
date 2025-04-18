/**
 * ARROW FUNCTION
 * Arrow Function 
 */  

let temperatureInFahrenheit = null

//Deklarasi function dengan regular function
const convertCelsiusToFahrenheitUsingRegularFunction = function(temperature) {
    const result = 9/5 * temperature + 32
    return result 
}
temperatureInFahrenheit = convertCelsiusToFahrenheitUsingRegularFunction(90)
console.log(temperatureInFahrenheit)

//Deklarasi function dengan arrow function
const convertCelsiusToFahrenheitUsingArrowFunction = (temperature) => {
    const result = 9/5 * temperature + 32
    return result
}
temperatureInFahrenheit = convertCelsiusToFahrenheitUsingArrowFunction(90)
console.log(temperatureInFahrenheit)

//Arrow Function Versi Singkat
const convertCelsiusToFahrenheitInConciseSyntax = (temperature) => 9/5 * temperature + 32

temperatureInFahrenheit = convertCelsiusToFahrenheitInConciseSyntax(90)
console.log(temperatureInFahrenheit)
