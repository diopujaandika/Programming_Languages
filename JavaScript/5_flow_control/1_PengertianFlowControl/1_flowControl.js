//FLOW CONTROLS
/**
 * Flow Controls adalah urutan expression dan statement dijalankan oleh komputer berdasarkan kondisi dan logika tertentu sehingga program menjadi lebih dinamis.
 * 
 * Jenis-jenis Flow Controls
 * 1. Conditional flow adalah cara untuk menentukan apakah code dieksekusi atau dilewatkan.
 *      a. If Statement
 *      b. Switch Case
 */
//If Else Statement
    //Contoh 1
    const studentScore = (score) => {
        if (score > 90){
            console.log('Selamat, Anda mendapatkan nilai A!');
        } else if (score > 80){
            console.log('Selamat, Anda lulus ujian!');
        }else{
            console.log('Maaf, Anda belum lulus ujian!');
        }
    }
    studentScore(87);

    //Contoh 2
    const gajian = true;
    console.log('Berjalan-jalan di mal?');
    if (gajian) {
        console.log('Makan di restoran mal.');
    }
    console.log('Pulang ke rumah');
    
    //Contoh 3
    const nilaiUjian = (nama, nilai) => {
        if(nilai >= 75) {
            console.log(`Selamat ${nama}, Anda dinyatakan "LULUS". Nilai Anda:`, nilai);
        }else{
            console.log(`Mohon maaf ${nama}, Anda dinyatakan "TIDAK LULUS", Nilai Anda: `, nilai);
        }
    }
    nilaiUjian("Dio Puja Andika", 100.00);

    //Contoh 4
    const hasilUjian = (peserta) => {
        peserta.forEach(({nama, nilai}) => {
            if(nilai >= 75) {
                console.log(`Selamat ${nama} Anda dinyatakan "LULUS". Nilai Anda: `, nilai);
            } else {
                console.log(`Mohon maaf ${nama} Anda dinyatakan "TIDAK LULUS". Nilai Anda: `, nilai);
        }
        });
    }
    const peserta = [
        {
            nama: 'Diva',
            nilai: 100
        },
        {
            nama: 'Dina',
            nilai: 70
        },
        {
            nama: 'Putri',
            nilai: 88
        },
        {
            nama: 'Putra',
            nilai: 50
        },
    ]
    hasilUjian(peserta);


// Switch Statement adalah control flow statement yang mengevaluasi expression terhadapap beberap kasus.
    //Contoh 1
    const nameFruit = (fruit) => {
        switch (fruit) {
            case 'banana':
                console.log('I am a Banana!');
                break;
            case 'apple':
                console.log('I am a Apple!');
                break;
            case 'orange':
                console.log('I am a Orange!');
                break;
            default:
                console.log(`I am not a fruit. I am a ${fruit}!`);
        }
    }
    nameFruit('web developer');
    
    //Contoh 2
    function usia(orang) {
        orang.forEach(({nama, status}) => {
            switch (status){
            //Anak-anak
            case 'Anak-anak':
                console.log(`${nama} masih ${status}.`);
                break;        
            //Remaja
            case 'Remaja':
                console.log(`${nama} masih ${status}.`);
                break;   
            //Dewasa
            case 'Dewasa':
                console.log(`${nama} masih ${status}.`);
                break;   
            //Lansia
            case 'Lansia':
                console.log(`${nama} masih ${status}.`);
                break;   
            }
        }
        
    )}

    const orang = [
        {
            nama: 'Ana',
            status: 'Anak-anak'
        },
        {
            nama: 'Reja',
            status: 'Remaja'
        },
        {
            nama: 'Dewa',
            status: 'Dewasa'
        },
        {
            nama: 'Lani',
            status: 'Lansia'
        }
    ];
    usia(orang);
    