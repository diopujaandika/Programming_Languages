#DATA TYPING
"""
    Dalam data typing terdapat 2 hal dasar yang harus dipahami;
    1. Deklarasi => Merujuk pada pembuatan variable dengan menentukan tipe data dan nama variabelnya.
    Contoh:
        int age;
        float salary;
    2. Inisialisasi => Merujuk kepada pemberian nilai awal pada variable yang sebelumnya telah dideklarasikan.
    Contoh:
        int age = 17
        float salary = 100.000.000
"""

age = 17            #tipe data integer
salary = 500000.0   #tipe data float

print(type(age))    #output tipe data dari variable age
print(type(salary)) #output tipe data dari variable salary

#Python adalah bahasa pemrograman dynamic typing yang berarti python bahasa pemrograman yang mengetahui tipe variable saat program berjalan dan melakukan proses assignment sehingga memungkinkan untuk mengubah tipe data dari waktu ke waktu. contohnya:
x = 6           #tipe data integer
print(type(x)) 
x = "6"         #tipe data string
print(type(x))
