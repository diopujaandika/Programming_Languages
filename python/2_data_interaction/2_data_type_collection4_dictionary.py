#TIPE DATA COLLECTION 
"""
    Tipe data collection adalah tipe data yang menyimpan satu atau lebih data primitif sebagai satu kelompok.
    1. List []
    2. Tuple ()
    3. Set {}
    4. Dictionary  {'namaKey1': value1, 'nameKey2': value2, ...}
"""

#DICTIONARY: Kumpulan pasangan key-value yang bersifat tidak berurutan. Dictionary dapat menyimpan data kecil hingga besar. Dictionary didefinisikan dengan kurawal {} dan tambahan definisi berikut:
#1. Setiap elemen pasangan key-value dipisahkan dengan koma (,)
#2. Key dan value dipisahkan dengan titik dua (:)
#3. Key dan value dapat berupa tipe variable/objek apa pun

x = {'name': 'Dio Puja Andika', 'age': 24, 'isMarried': False}
print(type(x))
print(x)

#Cara mengakses Data pada Dictionary:
print(x ['name'])
#Cara menghapus Data pada Dictionary:
del x['isMarried']
print("Setelah dihapus: ", x)
#Cara mengubah Data pada Dictionary:
x['name'] = "Diva Puja Kiranzi"
x['age'] = 14
print("Setelah diubah: ", x)