#TIPE DATA COLLECTION 
"""
    Tipe data collection adalah tipe data yang menyimpan satu atau lebih data primitif sebagai satu kelompok.
    1. List []
    2. Tuple ()
    3. Set {}
    4. Dictionary {'key1': value1, 'key2': value2, ...}
"""

#TUPLE => Jenis dari list yang tidak adapat diubah elemennya. Umumnya, tuple digunakan untuk data yang bersifat sekali deklarasi dan dapat dieksekusi lebih cepat.
x = (1, 2.2, 'Dicoding', 1+3j) #inisialisasi dengan (1, 2, ..., n)
print(x)
print(type(x))

#Tuple juga memungkinkan untuk melakukan indexing dan slicing
x = (3, 'program strategis', 2+3j)
print(x[1])
print(x[0:3])

#Tuple bersifat immutable (Tidak dapat diubah)!
# x[1] = 'program emas'   #ERROR!
# print(x[1])

