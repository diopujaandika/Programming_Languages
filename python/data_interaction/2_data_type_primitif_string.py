#TIPE DATA
"""
    Dalam Python tipe data dibagi menjadi 2:
    1. Tipe data primitif
    2. Tipe data collection
"""

#Tipe Data Primitif => jenis paling tipe data dasar yang menyimpan single value. Terdiri dari:

#STRING => karakter yang berurutan diawalai dengan single quote 'value' atau double quote "value"
x = 'Dicoding'
print(type(x))

#Triple single/double quote => digunakan untuk menyimpan string yang lebh dari satu baris (multi-line)
multi_line = """
Kapan terakhri kali kita bertemu?
Kita bertemu hari Juma'at yang lalu.
"""
print(multi_line)

#String merupakan urautan karakter yang setiap karakternya memiliki indeks
x = "Dicoding"
print(x[0])

#Namun tidak dapat mengubah substring didalamnya karena python bersifat immutable
# x = "Dicoding"
# x[0] = 'F'
# # print(x[0])

#Dapat mengakses beberapa substring dengan menggunakan metode indexing dan slicing
x = 'Dicoding'
print(x[2:])

#Cara untuk menampilkan teks/string 
#1. Formatted String
firstName = "Decalo"
lastName = "D. Puja"
print(f"Halo Nama Saya adalah {firstName} {lastName}")
#2. %-formatting
print("Nama Saya adalah %s" %(firstName))
#3. str.format()
print("Nama Saya {}".format(firstName))