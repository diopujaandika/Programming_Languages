/*
    FP menawarkan banyak manfaat, selain kode jadi lebih ringkas, kode yang ditulis juga akan lebih mudah untuk diuji karena fungsi yang dibuat hasilnya selalu terprediksi.
    Untuk mencapai itu dibutuhkan konsep pure function.

    Pure Function merupakan istilah bagi sebuah fungsi yang memiliki dua sifat berikut;
    1. Menghasilkan nilai yang sama setiap kali dipanggil dengan argumen yang sama
    2. Tidak memiliki efek samping yang dapat memengaruhi keadaan di luar fungsi tersebut.
    Jika memenuhi kedua kriteria ini makan fungsi akan dikategorikan sebagai pure function.
*/

// Contoh Pure Function
function addWith(value, addingValue) {
    return value + addingValue;
}

const result1 = addWith(0, 1);
console.log(`result is ${result1}`); // Output: result1 is 1
const result2 = addWith(result1, 1);
console.log(`result is ${result2}`); // Output: result2 is 2
const result3 = addWith(result2, 1);
console.log(`result is ${result3}`); // Output: result3 is 3

console.log(result1, result2, result3); // Ouput: 

// Contoh
// Menghitung total harga pesanan tanpa mengubah input
function calculateTotalPrice(orderItems) {
    return orderItems.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
}

// Memfilter dan memetakan data tanpa menguabah array asli
function getActiveUsernames(users) {
    return users
        .filter(user => user.isActive)
        .map(user => user.username);
}

// Membuat objek baru berdasarkan input tanpa mengubah input asli
function createUserProfile(user, address) {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        address: {
            street: address.street,
            city: address.city,
            country: address.country,
        }
    };
}

// Menggabungkan dua objek tanpa mengubah objek asli
function mergeSettings(defaultSettings, userSettings) {
    return {
        ...defaultSettings,
        ...userSettings,
    };
}