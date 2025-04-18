//FUNCTION EXPRESSION

const result = 3*4
console.log(result)

const greetWorld = function (message){
    console.log('HelloWorld')
}
greetWorld()

const convertCelsiusToFahrenheit = function (temperture){
    const result = (9/5)*temperture+32
    return result
}
const temperatureInFahrenheit = convertCelsiusToFahrenheit(90)
console.log('Hasil Konversi:', temperatureInFahrenheit)

const sumNumbers = function (a, b){
    const result = a * b
    console.log(`Hasil dari ${a} x ${b} = `, result)
    return result
}
sumNumbers(1, 2)
sumNumbers(3, 4)
const findResult = sumNumbers(5, 6)
console.log('Hasil akhirnya adalah ', findResult)


const multiply = function (a, b){
    return a * b
}
function calculate(operation, numA, numB){
    return operation(numA, numB)
}
const resultCal = calculate(multiply, 2, 3)
console.log(resultCal)