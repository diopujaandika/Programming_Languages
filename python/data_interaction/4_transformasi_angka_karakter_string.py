#TRANSFORMASI ANGKA KARAKTER DAN STRING

#Mengubah Huruf Besar/Kecil
#upper() => Fungsi untuk UPPERCASE (Huruf Kapital)
kata1 = 'dicoding kapital'
kata1 = kata1.upper()
print(kata1)
#lower() => Fungsi untuk lowercase (Huruf Kecil)
kata2 = 'DICODING KECIL'
kata2 = kata2.lower()
print(kata2)

#Awalan dan Akhiran
#rstrip() => Menghapus whitespace pada sebelah kanan atau akhir string
print("Dicoding         ".rstrip() + " Indonesia")
#lstrip() => Menghapus whitespace pada sebelah kanan atau awal string
print("         Dicoding".lstrip())
#strip() => MMenghapus whitespace pada bagian awal dan akhir string
print("             Dicoding        ".strip())
#Contoh untuk menghilangkan karakter selain whitespace
kata3 = 'CodecodeDicodingCodeCode'
print(kata3.strip("Code"))
#startswith() => Untuk menemukan suatu kata pada awal string, metode ini mengembalikan nilai True
print('Dicoding Indonesia'.startswith('Dicoding'))
#endswith() => Menembukan suatu kata pada akhir string, metode ini mengembalikan nilai True
print('Dicoding Indonesia'.endswith('Dicoding'))