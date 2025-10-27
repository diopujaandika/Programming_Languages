package com.diopujaandika.kotlin.tipe_data

// STRING
// Menampilkan tampilan yang dinamis
fun main()  {
    val userAddress = "Jalan Pahlawan no. 10"
    println(userAddress)

    // String concatention => Cara mengabungkan teks status dan dinamis menggunakan operator assignment "+"
    val nama = "Budi"
    val lokasi = "Bandung"
    println("Hallo, " + nama + "! Bagaimana cuaca di " + lokasi + " hari ini?")

    // String template => memnungkinkan menggabungkan teks statis dan dinamis dengan kode yang lebih mudah dibaca dengan menggunakan String Interpolation "$"
    println("Halo, $nama! Bagaimana cuaca di $lokasi hari ini?")
}