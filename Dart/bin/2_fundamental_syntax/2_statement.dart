///STATEMENT

void main(){
    //Statement adalah instruksi yang akan diesksekusi oleh komputer ketika program dijalankan.
    //Setiap statement dalam Dart diakhiri dengan tanda semicolon [;].

    //Contoh Statement
    String name = 'Dio Puja Andika';                          //Statement 1
    int age = 22;                                             //Statement 2
    print(name.runtimeType);                                  //Statement 3
    print('Nilai $name bertype ${name.runtimeType}');         //Statement 4
    print(age.runtimeType);                                   //Statement 5
    print('Nilai $age bertype ${age.runtimeType}');           //Statement 6
    print('Hello, my name is $name, my current age is $age'); //Statement 7

    //Contoh Statement
    String namaDepan = "Dio"; //statement
    String namaBelakang = "Andika"; //statement

    print(namaDepan + namaBelakang);
    print('Nama saya adalah $namaDepan. Biasa dipanggil $namaBelakang.');
}