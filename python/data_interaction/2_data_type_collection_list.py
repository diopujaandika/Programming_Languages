#TIPE DATA COLLECTION 
"""
    Tipe data collection adalah tipe data yang menyimpan satu atau lebih data primitif sebagai satu kelompok.
    1. List
"""

#LIST => Jenis kumpulan data terurut (ordered sequence) dan salah satu tipe data yang sering digunakan pada Python dengan tidak mengharuskan memiliki tipe data yang sama di dalamnya.

x = [1, 2.2, 'Dicoding'] #inisialisasi dengan [1, 2, ..., n]
print(x)
print(type(x))

variable_list = [1, "Dicoding", True, 1.0] #List memiliki indeks yang selalu dimulai dari 0 
print(x[2]) #Gunakan [] untuk mengindeks data di dalam list

#List bersifat mutable (data diubah)
variable_list = [1, 2.2, 'Dicoding']
print(x)
x[0] = "Indonesia" #Merubah data di dalam list []
print(x)

#Mengambil data berdasarkan indeksnya
komputer = ["Monitor", "Mouse", "CPU", "Keyboard", "Webcam", "Microphone"]
print(komputer[0])
print(komputer[2])
print(komputer[-1])
print(komputer[-3])