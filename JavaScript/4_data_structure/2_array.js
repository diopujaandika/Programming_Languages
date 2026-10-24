//ARRAY
/**
 * Struktur data spesial yang dapat menyimpan kumpulan data yang terurut.
 * 1. Array menyimpan data secara terurut
 * 2. Array bisa menambahkan nilai diantara data yang sudah ada
 * 3. Data yang ada di array dapat diakses menggunakan pola indeks
 * 4. Nilai yang disimpan di dalam array disebut dengan element.
 * 5. Array bisa menampung segala jenis data termasuk object.
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
        const example = new Array(5);
        console.log('Hasil array dari example adalah:', example);
        const example1 = new Array(10);
        console.log('Hasil array dari example adalah:', example1);
        const example2 = new Array(10);
        console.log('Hasil array example2 adalah, ', example2);
        
    //b. Menggunakan sintaks Array.from => deklarasiVariable namaArray = Array.from()
        const coding = Array.from('coding');
        console.log('Isi dari array 1 ini adalah ', coding);
        const coding2 = Array.from('coding2');
        console.log(coding2);
        const coding3 = Array.from('coding3');
        console.log(coding3);

        const namaHero = new Array('Tony Stark', 'Stave Rogers', 'Thor', 'Bruce Banner', 'Natasha Romanoff', 'Clint Barton');
        const avengers = Array.from(namaHero); //Bisa digunakan untuk menyalin array lainnya.
        console.log(avengers);

        const namaHeroDC = new Array('Superman', 'Batman', 'Wonderwoman', 'Aquaman', 'Flash', 'Cyberbog', 'Green Lantern');
        const justiceLeague = Array.from(namaHeroDC);
        console.log(justiceLeague);

    //c. Menggunakan Array Literal => deklarasiVariable namaArray = []
        const captainAvangers = ['Stave Rogers', 'Captain Amarica', 1, , true];
        console.log(captainAvangers);
        const spiderMan = ['Peter Parker', 18, true];
        console.log('Siapa itu spiderman', spiderMan);
        const dcComic = ['Clark Kent', 'Superman', 1000, true]

//2. Mengakses Element Array => namaArray[indeks]
        const anggotaAvenbers = ['Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow', 'Hawkeye'];
        console.log('Anggota avenger pertama adalah', anggotaAvenbers[0]);

//3. Manipulasi Nilai Array
    //a. Menggunakan indexing (mengubah nilai) => namaArray[indeks] = nilaiBaru
        let angka = [1, 2, 3, 4, 5,];
        angka[2] = 10;
        console.log(angka[2]);
        console.log(angka);
    //b. Menggunakan push (menambahkan nilai) => namaArray.push(nilaiTambah)
        let huruf = ['a', 'b', 'c', 'd', 'e'];
        huruf.push('f');
        console.log(huruf);

//4. Menghapus Element dan Data Array 
        //a. Menghapus data tapi element masih ada => delete namaArray[indeks]
            delete angka[1];
            console.log(angka);
        //b. Menghapus data dan element => namaArray.splice(indeks, jumlahElement)
            angka.splice(1, 1); //Menghapus 1 Element
            console.log(angka);
            angka.splice(1, 2); //Menghapus 2 Element
            console.log(angka);
        //c. Menghapus dengan Method Shift (Element Pertama) and Pop (Element Terakhir) 
            huruf.shift(); //shift (Menghapus Element Pertama)
            console.log(huruf);
            huruf.pop();  //pop (Menghapus Element Terakhir)
            console.log(huruf);

//5. Array Destructuring (melihat isi dari Array) 
        const introduction = ['Hello', 'Arsy', 24];
        const [greeting, nama, age] = introduction;
        console.log(greeting, nama, age);

//6. Array Method
    //a.Reverse (membalik nilai array) => namaArray.reverse()
        let arrayReverse = ['a', 'b', 'c', 'd', 'e'];
        arrayReverse.reverse();
        console.log(arrayReverse);
    //b.Sort (mengurutkan nilai array) => namaArray.sort()
        let teamHero = ['Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow', 'Hawkeye'];
        teamHero.sort();
        console.log(teamHero);