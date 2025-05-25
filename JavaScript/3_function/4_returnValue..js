/**
 * RETURN VALUE
 * Return value adalah nilai yang dikembalikan oleh sebuah function setelah function itu selesai dijalakan 
 */

function sumNumber(a, b){
    const result = a + b
    console.log(result)
    return result
}
const askNumber = sumNumber(3, 4)
console.log(`Hasilnya adalah ${askNumber}`) 

//Return Value membaut function statement berhenti dieksekusi jika kode sudah mencapai return statement
function generateGreetingWorldMessage(){
    return 'Hello World'
    console.log('Aku tidak akan tampil')
}
const message = generateGreetingWorldMessage()
console.log(message)

function convertCelsiusToFahrenheit(temperature){
    const result = 9/5 * temperature + 32
    console.log(`Hasilnya adalah: ${result}`)
    return result
}
const temperatureInFahrenheit = convertCelsiusToFahrenheit(90)
console.log(temperatureInFahrenheit) 
