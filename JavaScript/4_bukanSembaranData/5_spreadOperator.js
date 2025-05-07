//SPREAD OPERATOR
/**
 * Spread operator digunakan untuk menyebarkan nilai yang ada pada object dan array. Spread opertor ditantai dengan tiga titik (...) sehingga nilai object dan array dapat di-iterable menjadi beberapa element.
 */

//OBJECT
    const objectSatu = {name: 'Dicoding'}
    const objectDua = {lastName: 'Indonesia', address: 'Jln. Batik Kumeli No. 50', years: 10}
    //Mempermudah mengabungkan dua atau lebih object
    const objectMenyebar = {...objectSatu, ...objectDua}
    console.log(objectMenyebar)
    //Mempermudah menyalin suatu object
    const objectMenyalin = {...objectMenyebar}
    console.log(objectMenyalin)

//ARRAY
    const arraySatu = ['Dicoding']
    const arrayDua = ['Indonesia', 'Jln. Batik Kumeli No. 50', 11]
    //Mempermudah mengabungkan dua atau lebih array
    const arrayMenyebar = [...arraySatu, ...arrayDua]
    console.log(arrayMenyebar)
    //Mempermudah menyalin suatu array
    const arrayMenyalin = [...arrayMenyebar]
    console.log(arrayMenyalin)
