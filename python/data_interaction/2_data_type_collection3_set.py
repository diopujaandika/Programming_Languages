#TIPE DATA COLLECTION 
"""
    Tipe data collection adalah tipe data yang menyimpan satu atau lebih data primitif sebagai satu kelompok.
    1. List []
    2. Tuple ()
    3. Set {}
    4. Dictionary {'key1': value1, 'key2': value2, ...}
"""

#SET => Kumpulan item bersifat unik (data tidak akan ada yang terduplikat), tanpa urutan (unordered collection), dan dapat diinisialisasikan dengan kurawal {} di mana setiap elemennya dipisahkan dengan koma.
x = {1, 2, 7, 2, 3, 13, 3, "dicoding", "dicoding"}
print(type(x))
print(x)

#SET adalah himpunan dalam matematika, sehingga kita dapat melakukan operasi union (gabungan) dan intersection (irisan).

set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}

union = set1.union(set2) #Method union()
print("Union: ", union)

intersection = set1.intersection(set2) #Method intersection()
print("Intersection: ", intersection)