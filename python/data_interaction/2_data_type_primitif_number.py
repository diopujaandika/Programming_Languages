#TIPE DATA
"""
    Dalam Python tipe data dibagi menjadi 2:
    1. Tipe data primitif
    2. Tipe data collection
"""

#Tipe Data Primitif => jenis paling tipe data dasar yang menyimpan single value. Terdiri dari:
#1. NUMBER => Tipe data jenis angka (integer, float, complex)

x = 6           #integer
print(type(x))

x = 6.6         #float
print(type(x))

x = 1+2j        #complex
print(type(x))


#Python bersiftat immutable (value di dalam variable tidak bisa berubah)
#Walaupun nama variable sama akan tetapi value di dalamnya akan menempati memory yang berbeda
var = 10
print(var)
print(id(var))  #id digunakan untuk melihat memory address

var = 11
print(var)
print(id(var))  #id digunakan untuk melihat memory address


