#OPERASI PADA LIST, SET, DAN STRING

#len() => Menghitung panjang elemen dari suatu list
#1. List
contoh_list = [1, 3, 3, 5, 5, 5, 7, 7, 9, 10]
print(contoh_list)
print("Jumlah List adalah:", len(contoh_list))
#2. Set
contoh_set = set([1, 3, 3, 5, 5, 5, 7, 7, 9, 10])
print(contoh_set)
print("Jumlah Set adalah:", len(contoh_set))

#min() dan max() => Mengetahui nilai minimum dan maksimum dalam suatu list.
angka = [13, 7, 43, 24, 5, 96, 84, 71, 11, 38]
print(angka)
print("Nilai minimum:", min(angka))
print("Nilai maximum:", max(angka))

#COUNT
#count() => Mengetahui berapa kali suatu objek muncul dalam list
genap = [2, 3, 4, 4, 6, 6, 8, 5, 10]
print(genap)
print('Count dari list ini adalah:', genap.count(6), 'Kali')
string = "Belajar Python di Dicoding sangat menyenangkan"
substring = "a"
print(string)
print("a sebanyak:", string.count(substring))

#In dan Not In => Operator yang digunakan untuk mengetahui nilai atau objek yang ada dalam list.
kalimat = "Belajar Python di Dicoding sangat menyenangkan"
print('Dicoding' in kalimat)
print('tidak' in kalimat)
print('Dicoding' not in kalimat)
print('tidak' not in kalimat)

#MEMBERIKAN NILAI UNTUK MULTIPLE VARIABLE
data = ['shirt', 'white', 'L']
apparel, color, size = data
print(data)
print(apparel)
print(color)
print(size)

#SORT => sort() digunakan untuk mengurutkan angka atau urutan huruf
kendaraan = ['Motor', 'Mobil', 'Pesawat', 'Kapal']
kendaraan.sort()    #Mengurutkan dari terkecil hingga terbesar
print(kendaraan)
kendaraan.sort(reverse=True) #Mengurutkan secara terbalik
print(kendaraan)
#Sayangnya sort tidak dapat mengurutkan list yang memiliki angkat dan string sekaligus di dalamnya. contoh: urutan = ['Dicoding', 1, 2, 'Indonesia', 3]
#Metode sort menggunakan urutan ASCII sehingga nilai huruf kapital (uppercase) akan lebih dahulu dibandingkan huruf kecil (lowercase)
kendaraan1 = ['Motor', 'mobil', 'Pesawat', 'kapal']
kendaraan1.sort()
print(kendaraan1)