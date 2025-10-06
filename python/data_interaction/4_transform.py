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

#Memeisahkan dan menggabungkan String
print(' ' .join(['Dicoding', 'Indonesia', '!']))
print('123'.join(['Dicoding','Indoenesia']))
print('Dicoding Indoenesia!'.split())
print('''Halo,
aku ikan,
aku suka sekali menyelam
aku tinggal di perairan.
Badanku licin dan renangku cepat.
Senang berkenalan denganmu.'''.split('\n'))

