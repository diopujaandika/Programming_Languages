kata = 'Dicoding'
kata = kata.upper() #Uppercase
print(kata)

kata = kata.lower() #Lowercase
print(kata)

print("Dicoding             ".rstrip())
print("             Dicoding".lstrip())
print("      Dicoding       ".strip())

kata = 'CodeCodeDicodingCodeCode'
print(kata.strip("Code"))
print('Dicoding Indonesia'.startswith('Dicoding'))
print('Dicoding Indonesia'.endswith('Dicoding'))

#Memisahkan dan menggabungkan String
print(' ' .join(['Dicoding', 'Indonesia', '!']))
print('123'.join(['Dicoding','Indoenesia']))
print('Dicoding Indoenesia!'.split())
print('''Halo,
aku ikan,
aku suka sekali menyelam
aku tinggal di perairan.
Badanku licin dan renangku cepat.
Senang berkenalan denganmu.'''.split('\n'))

#Mengganti Elemen String
string = "Ayo belajar Coding di Dicoding"
print(string.replace("Coding", "Pemrograman"))

#Pengecekan String
kata = "Dicoding"
print(kata.isupper())
kata = "dicoding"
print(kata.islower())
kata = 'dicoding'
print(kata.isalpha())
print('123'.isdecimal())
print('             '.isspace())
print('Dicoding Indonesia'.istitle())

#Formatting pada String
teks = 'Code'
tambah_number = teks.zfill(5)
print(tambah_number)
print('Dicoding'.rjust(20))
print('Dicoding'.rjust(20, '!'))
print('Dicoding'.ljust(20))
print('Dicoding'.center(10, '-'))

#String Literals
print("Halo!\nKapan terakhir kali kita bertemu?\nKita bertemu hari Jum\'at yang lalu.")

#Raw String
print(r'Dicoding\tIndonesia')