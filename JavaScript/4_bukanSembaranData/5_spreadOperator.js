/**
 * Spread Operator
 * Spread Operator digunakan untuk menyebarkan nilai yang ada pada object dan array dengan sintak ...namaObject
 */

//Contoh dalam Object
    const obj1 = {name: 'Dicoding'}
    const obj2 = {lastNama: 'Indonsia', adress: 'Jl. Batik Kumeli No. 50'}
    //Memudahkan untuk mengabungkan object
    const newObj = {...obj1, ...obj2}
    console.log(newObj)
    //Memudahkan menyalin object
    const copieObj = {...obj2}
    console.log(copieObj)

//Contoh dalam Array
    const array1 = ["Dicoding"]
    const array2 = ["Indonesia", "Jl. Batik Kumeli No. 50"]
    //Memudahkan untuk mengabungkan Array
    const newArray = [...array1, ...array2]
    console.log(newArray)
    //Memudahkan untuk menyalin Array
    const copieArray = [...array2]
    console.log(copieArray)