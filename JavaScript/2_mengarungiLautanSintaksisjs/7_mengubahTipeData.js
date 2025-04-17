//Konversi Eksplisit
//Mengubah ke String dengan fungsi String(variable) dan variable.toString()
    const number = 123
    const boolean = true
    const strNumber = String(number) //String(variable)
    const strBoolean = boolean.toString() //variable.toString()
    console.log(strNumber, strBoolean);

//Mengubah ke Number dengan Number(variable)
    const strNumber2 = '123'
    const strFloat2 = "3.14"
    const numFormString = Number(strNumber2)
    const floatFromString = Number(strFloat2)
    const numFromBoolean = Number(boolean)
    console.log(numFormString, floatFromString, numFromBoolean)

    const cm = '20cm'
    const px = '61.1px'
    const intFromCM = parseInt(cm)  //parseInt(variable) untuk menjadi bilangan bulat
    const intFromPX = parseFloat(px) //parseFloat(variable) untuk menjadi bilangan pecahan
    console.log(intFromCM, intFromPX)

//Mengubah ke Boolean dengan fungsi Boolean(variable)
    const boolNumber = 123
    const boolString = 'Dicoding'
    const boolEmpty = null
    const boolFormNumber = Boolean(boolNumber)
    const boolFromString = Boolean(boolString)
    const boolFromNull = Boolean(boolEmpty)
    console.log(boolFormNumber, boolFromString, boolFromNull);

//Konversi Implisit itu bergantung keadaan operator yang digunakan
    const myAge = 23
    const myMessage = 'Usiaku: ' + myAge
    console.log(myMessage)
    const myBool = true
    const myResult = 14 + myBool
    console.log(myResult)
