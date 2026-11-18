#KONVERSI TIPE DATA
"""
    Konversi tipe data dapat menggunakan fungsi.
    Fungsi adalah blok kode yang dapat dipanggil untuk melakukan tugas tertentu.
"""

#Konversi Integer ke Float
print(float(5))

#Konversi Float ke Integer
print(int(5.6))
print(int(-5.6))

#Konversi dari-dan-ke String
print(int("25"))    #String ke Integer  
print(str(25))      #Integer ke String
print(float("25"))  #String ke Float
print(str(25.6))    #Float ke String
#print(int("1p"))   #Error, pastikan data valid

#Konversi Kumpulan Data
print(set([1, 2, 3]))   #Konversi ke Set
print(tuple({4, 5, 6})) #Konversi ke Tuple
print(list('Hello'))    #Konversi ke List

#Konversi ke Dictionary, data harus memenuhi persyaratan key-value.
print(dict([[1, 2], [3, 4]]))
print(dict([(3, 33), (4, 44)])) #Konversi list dari beberapa tuple yang isinya pasangan nilai menjadi dictionary
