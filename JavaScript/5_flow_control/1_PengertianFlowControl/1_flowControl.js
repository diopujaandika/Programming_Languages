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

// Switch Statement adalah control flow statement yang mengevaluasi expression terhadapap beberap kasus.

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