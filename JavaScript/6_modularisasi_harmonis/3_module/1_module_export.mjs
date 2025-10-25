//MODULE
/**
 * 
 */

//Cara Export Variable
    export const name = 'Dicoding';
    export const favoriteFood = ['Pizza', 'Pasta', 'Shushi'];

//Cara Export Function
    export function sayHi(name){
        console.log(`Hi, ${name}`);
    }

//Sebenarnya tidak perlu menuliskan kata kunci export disetiap nilai yang ingin dieksport. Kita cukup mengeksport diakhir berikas:
    const nama = 'Dicoding';
    const makananKesukaan = ['Mi Ayam', 'Sate', 'Nasi Goreng', 'Bakso'];
    function iniSaya(nama, makananKesukaan){
        console.log(`Hai, ini ${nama}, makanan kesukaan saya adalah ${makananKesukaan}`);
    }
    export{nama, makananKesukaan, iniSaya};