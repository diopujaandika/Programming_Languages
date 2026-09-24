//MAP
/**
 * Map adalah salah satu struktur data yang menyimpan KEY-VALUE dengan fungi untuk menutupi kekurangan dari object yaitu key dapat digunakan untuk tipe data apa pun.
 * 
 * SINTAKSIS MAP
 * 1. Membuat Map => deklarasiVariable namaMap = new Map([])
 * 2. Menyimpan Nilai di Map => namaMap.set(key, value)
 * 3. Mengakses Nilai di Map => namaMap.get(key)
 * 4. Menghapus Nilai di Map => namaMap.delete(key)
 */

//1. Membuat Map (new Map ())=> deklarasiVariable namaMap = new Map([])
    const nameTeam = new Map([
        ['Tony Stark', 'Iron Man'],
        ['Stave Rogers', 'Captain America'],
        ['Thor Odinson', 'Thor'],
        ['Bruce Banner', 'Hulk'],
        ['Natasha Romanoff', 'Black Widow'],
        ['Clint Barton', 'Hawkeye']
    ]);
    console.log(nameTeam);

//2. Menyimpan Nilai di Map (set) => namaMap.set(namaKey, nilaiValue)
    //a. String sebagai Key
        const namaHero = new Map();
        namaHero.set('Iron Man', 3000);
        console.log(namaHero);
    //b. Number sebagai Key
        const namaVilain = new Map();
        namaVilain.set(10000, 'Dr. Doom');
        console.log(namaVilain);

//3. Mengakses Nilai di Map (get) => namaMap.get(namaKey)
    console.log(nameTeam.get('Tony Stark'));
    console.log(namaVilain.get(10000));

//4. Menghapus Nilai di Map (delete) => namaMap.delete(namaKey)
    nameTeam.delete('Clint Barton');
    console.log(nameTeam);