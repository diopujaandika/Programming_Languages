//SWITCH CASE STATEMENT
/**
 * Switch Case Statement adalah control flow statement yang mengevaluasi expression terhadap beberapa kasus dengan kode yang lebih readable dan ringkas.
 * switch (expression){
 *      statement
 * }
 */

//Contoh Penerapan 1
    const fruit = 'bluebarry'
    switch(fruit){
        case 'banana':
            console.log('I am a Banana')
            break
        case 'apple':
            console.log('I am a Apple')
            break
        case 'orange':
            console.log('I am a Orange')
            break
        default:
            console.log('I am not a frui. I am a Programmer!')
    }

//Contoh Penerapan 2
    const day = new Date().getDay()
    switch (day){
        case 0 :
            console.log('Minggu')
            break
        case 1 :
            console.log('Senin')
            break
        case 2 :
            console.log('Selasa')
            break
        case 3 : 
            console.log('Rabu')
            break
        case 4 :
            console.log('Kamis')
            break
        case 5 : 
            console.log('Jumat')
            break
        case 6 : 
            console.log('Sabtu')
            break
        default:
            console.log('Hari Tidak Valid!')
    } 

//Contoh Penarapan 3
    const number = 2
    switch (number){
        case 1 :
            console.log('Ini 1')
            break
        case 2 : 
            console.log('Ini 2')
            break
        case 3 :
            console.log('Ini 3')
            break
        default :
            console.log('Ini Default!')
    }