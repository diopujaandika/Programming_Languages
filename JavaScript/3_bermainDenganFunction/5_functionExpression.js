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

//Contoh menjadi First-Class Citizen
    const multiply = function(a, b){
        return a * b
    }

    const calculate = function (operation, numA, numB){
        return operation(numA, numB)
    }

    const result = calculate(multiply, 2, 4)
    console.log(result)

//Bagaimana mengembalikan nilai function dari suatu function?
const multiplier = function(x){
    return function(num){
        return x * num
    }
}

const double = multiplier(2)
const truple = multiplier(3)

console.log(double(10))