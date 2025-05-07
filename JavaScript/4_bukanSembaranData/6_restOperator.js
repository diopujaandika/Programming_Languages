//REST OPERATOR
/**
 * Rest Opertor digunakan function untuk menerima argument dalam bentuk array. Rest operator yang digunakan pada parameter function disebut dengan Rest Parameter (...)
 */

    function namaFunction(...parameter){
        console.log('nama: ', parameter)
    }
    namaFunction('Tony Stark', 'Stave Rogers', 'Thor')

    //Bagaimana dengan dua atau lebih dari satu parameter?
    function avengers(vilain, ...hero){
        console.log('Baiik: ', hero)
        console.log('Jahat: ', vilain)
    }
    avengers('Dr. Doom', 'Iron Man', 'Captain Amerika', 'Thor')

    //Untuk melihat jumlah data yang ada menggunakan methode => namaArray.length
    function namaAntiHero(...antiHero){
        console.log(antiHero.length)
        console.log('Nama : ', antiHero)
    }
    namaAntiHero('Venom', 'Deadpool', 'Loki', 'Moon Knight')

    //Untuk menangkap sisa elemen yang dipanggil sebelumnya
    const hero = ['Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow', 'Hawkeye']
    const [first, second, ...rest] = hero

    console.log(first)
    console.log(second)
    console.log(rest)