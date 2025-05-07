//ARRAY
/**
 * Struktur data spesial yang dapat menyimpan kumpulan data yang terurut.
 * 1. Array menyimpan data secara terurut
 * 2. Array bisa menambahkan nilai diantara data yang sudah ada
 * 3. Data yang ada di array dapat diakses menggunakan pola indeks
 * 4. Nilai yang disimpan di dalam array disebut dengan element.
 * 5. Array bisa menampuang segala jenis data termasuk object.
 * 
 * SINTAKSIS ARRAY
 * 1. Membuat Array
 *      a. Object Constructor => deklarasiVariable namaArray = new Array()
 *      b. Array.from => deklarasiVarible namaArray = Array.from()
 *      c. Array Literal => deklarasiVariable namaArray = [element]
 * 2. Mengakses Element Array => namaArray[indeks]
 * 3. Manipulasi Nilai Array
 *      a. Menggunakan indexing (mengubah nilai) => namaArray[indeks] = nilaiBaru
 *      b. Menggunakan push (menambahkan nilai) => namaArray.push(nilaiTambah)
 * 4. Menghapus Element dan Data Array 
 *      a. Menghapus data tapi element masih ada => delete namaArray[indeks]
 *      b. Menghapus data dan element => namaArray.splice(indeks, jumlahElement)
 *      c.  Menghapus dengan Method Shift (Element Pertama) and Pop (Element Terakhir)
 * 5. Array Destructuring (melihat isi dari Array) 
 * 6. Array Method
 *      a. Reverse (membalik nilai array) => namaArray.reverse()
 *      b. Sort (mengurutkan nilai array) => namaArray.sort()
 */    

//1. Membuat Array 
    //a. Menggunakan object constructor => deklarasiVariable namaArray = new Array()
        const example = new Array(5)
        console.log(example)
    //b. Menggunakan sintaks Array.from => deklarasiVariable namaArray = Array.from()
        const coding = Array.from('coding')
        console.log(coding)
        const namaHero = new Array('Tony Stark', 'Stave Rogers', 'Thor', 'Bruce Banner', 'Natasha Romanoff', 'Clint Barton')
        const avengers = Array.from(namaHero) //Bisa diguankan untuk menyalin array lainnya.
        console.log(avengers)
    //c. Menggunakan Array Literal => deklarasiVariable namaArray = []
        const CaptainAvangers = ['Stave Rogers', 'Captain Amarica', 1, , true]
        console.log(CaptainAvangers)

//2. Mengakses Element Array => namaArray[indeks]
        const anggotaAvenbers = ['Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow', 'Hawkeye']
        console.log(anggotaAvenbers[0])

//3. Manipulasi Nilai Array
    //a. Menggunakan indexing (mengubah nilai) => namaArray[indeks] = nilaiBaru
        let angka = [1, 2, 3, 4, 5,]
        angka[2] = 10
        console.log(angka[2])
    //b. Menggunakan push (menambahkan nilai) => namaArray.push(nilaiTambah)
        let huruf = ['a', 'b', 'c', 'd', 'e']
        huruf.push('f')
        console.log(huruf)

//4. Menghapus Element dan Data Array 
        //a. Menghapus data tapi element masih ada => delete namaArray[indeks]
            delete angka[1] 
            console.log(angka)
        //b. Menghapus data dan element => namaArray.splice(indeks, jumlahElement)
            angka.splice(1, 1)  //Menghapus 1 Element
            console.log(angka)
            angka.splice(1, 2) //Menghapus 2 Element
            console.log(angka)
        //c. Menghapus dengan Method Shift (Element Pertama) and Pop (Element Terakhir) 
            //Sift (Menghapus Element Pertama)
            huruf.shift()
            console.log(huruf)
            //pop (Menghapus Element Terakhir)
            huruf.pop()
            console.log(huruf)

//5. Array Destructuring (melihat isi dari Array) 
        const introduction = ['Hello', 'Arsy']
        const [greeting, nama] = introduction
        console.log(greeting, nama)

//6. Array Method
    //a. Reverse (membalik nilai array) => namaArray.reverse()
        let arrayReverse = ['a', 'b', 'c', 'd', 'e']
        arrayReverse.reverse()
        console.log(arrayReverse)
    //b. Sort (mengurutkan nilai array) => namaArray.sort()
        let teamHero = ['Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow', 'Hawkeye']
        teamHero.sort()
        console.log(teamHero)