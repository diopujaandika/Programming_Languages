/**
 * KONVERSI TIPE DATA
 * Konversi dapat dilakukan dengan 2 cara 
 * 1. Konversi Eksplisit
 * 2. Konversi Implisit
 */

//1. Konversi Eksplisit
    //a. Mengubah ke String dengan fungsi String(variable) dan variable.toString()
        const number = 123
        const boolean = true
        //Convert
        const strNumber = String(number) //String(variable)
        const strBoolean = boolean.toString() //variable.toString()
        //Output
        console.log(strNumber, strBoolean);

    //b. Mengubah ke Number dengan Number(variable)
        const strNumber2 = '123'
        const strFloat2 = "3.14"
        //Convert
        const numFormString = Number(strNumber2)
        const floatFromString = Number(strFloat2)
        const numFromBoolean = Number(boolean)
        //Output
        console.log(numFormString, floatFromString, numFromBoolean)

        const cm = '20cm'
        const px = '61.1px'
        //Convert
        const intFromCM = parseInt(cm)  //parseInt(variable) untuk menjadi bilangan bulat
        const intFromPX = parseFloat(px) //parseFloat(variable) untuk menjadi bilangan pecahan
        //Output
        console.log(intFromCM, intFromPX)

    //c. Mengubah ke Boolean dengan fungsi Boolean(variable)
        const boolNumber = 123
        const boolString = 'Dicoding'
        const boolEmpty = null
        //Convert
        const boolFormNumber = Boolean(boolNumber)
        const boolFromString = Boolean(boolString)
        const boolFromNull = Boolean(boolEmpty)
        //Output
        console.log(boolFormNumber, boolFromString, boolFromNull)

//2. Konversi Implisit itu bergantung keadaan operator yang digunakan
    const myAge = 23
    const myMessage = 'Usiaku: ' + myAge
    console.log(myMessage, typeof(myMessage))
    const myBool = true
    const myResult = 14 + myBool
    console.log(myResult)
