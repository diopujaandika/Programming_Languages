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

#Memisah dan Menggabung String
#1. join() => Menggabungkan suatu value
print(' '.join(['Dicoding', 'Indonesia', '!']))
print('123'.join(['Dicoding', 'Indonesia', '!']))
#2. split() => Memisahkan suatu value
print('Dicoding Indonesia !'.split())
print('''Halo,
    aku ikan,
    aku suka sekali menyelam
    aku tinggal di perairan.
    Badanku licin dan renangku cepat.
    Senang berkenalan dengamu.'''.split('\n'))  #newline (\n) untuk memisahkan setiap baris pada string multiline

#Mengganti Elemen String
#1. replace()
string = 'Ayo belajar coding di Dicoding'
print(string.replace('coding', 'permrograman'))

#Pencetakan String
#1. isupper() => Mengembalikan nilai True jika semua huruf dalam string adalah huruf kapital (uppercase).
kata4 = 'DICODING'
print(kata4.isupper())
#2. islower() => Mengembalikan nilai True jika semua huruf dalam string adalah huruf kecil (lowercase).
kata5 = 'dicoding'
print(kata5.islower())
#3. isalpha() => Mengembalikan nilai True jika semua huruf dalam string adalah huruf alfabet.
kata6 = 'Dicoding'
print(kata6.isalpha())
#4. isalnum() => Mengembalikan nilai True jika dalam string adalah alfanumerik, yaitu huruf dan angka atau berisi keduanya.
kata7 = 'Dicoding123'
print(kata7.isalnum())
#5. isdecimal() => Mengembalikan nilai True jika dalam string berisi angka/numerik, jika tidak bernilai False.
kata8 = '123'
print(kata8.isdecimal())
#6. isspace() => Mengembalikan nilai True jika dalam string hanya berisi whitespace, seperti spasi, tab, newline, dll.
kata9 = '               '
print(kata9.isspace())
#7. istitle() => Mengembalikan nilai True jika string berisi huruf kapital pada setiap kata pertamanya.
kata10 = 'Dicoding Indonesia'
print(kata10.istitle())

#FORMATTING PADA STRING
#1. zfill() => Menambahkan nilai nol (0) di depan sebuah string dengan panjang tertentu dengan tujuan untuk memastikan bahwa sebbuah value memiliki panjang tetap (konsisten).
teks = 'Code'
tambah_number = teks.zfill(10)
print(tambah_number)
#2. rjust() => Merapikan pencetakan teks rata kanan
print('Dicoding'.rjust(20))     #angka 20 memastikan value berisi 20 karakter
print('Dicoding'.rjust(20, '!'))#karater yang tidak ditempati akan disi dengan "!"
#3. ljust() => Merapikan pencetakan teks rata kiri
print('Dicoding'.ljust(20))
print('Dicoding'.ljust(20,'!'))
#4. center() => Menjadikan teks rata tengah
print('Dicoding'.center(20, '-'))

#STRING LITERALS
print("Jum'at")
print('Jum\'at')    #Single quote
print("Jum\"at")    #Double quote
print('Jum\tat')    #Tab
print('Jum\nat')    #Newline
print('Jum\\at')    #Backslash

#RAW STRING => Menampilkan string sesuai dengan apapun input atau teks yang diberikan
print(r'Dicoding\tIndonesia')