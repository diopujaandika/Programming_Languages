/**
 * PARAMETER
 * Parameter adalah variabel yang menyimpan nilai krakteristik sebuah function  
 * ARGUMENT
 * Argument adalah data yang dikirimkkan ke dalam function saat function dipanggil baik berupa nilai langsung ataupun berupan variable
 */

function convertCelsiusToFahrenheit(temperature = 70){   
    const temperatureInFahrenheit = 9/5*temperature+32

    console.log('Hasil konversi: ', temperatureInFahrenheit)
}
convertCelsiusToFahrenheit()    //Default Parameter dari Function 
convertCelsiusToFahrenheit(80)  //Argument Langsung
const argumentValue = 90        
convertCelsiusToFahrenheit(argumentValue)   //Argument Variable