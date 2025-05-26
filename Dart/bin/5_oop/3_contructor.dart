///CONSTUCTOR
///Constructor adalah fungsi spesial dari sebuah class yang digunakan untuk membuat object.

///1. Constructor memiliki nama yang sama dengan nama kelas
///2. Constructor tidak memiliki nilai kembalian (return type)
///3. Constructor akan secara otomatis dipanggil ketika sebuah objek dibuat
///4. Jika kita tidak mendefinisikan constructor, default constructor tanpa argumen akan dibuat.

void main(){
  var dicodingCat = Animal('Gray', 2, 3.4);
  print(dicodingCat);
}
///NAMED CONSTRUCTOR
///class_name.constructor_name(arguments){//Statement}
class Animal{
  String name = '';
  int age = 0;
  double weight = 0;

  //Mendklarasikasn sebuah contructor
  Animal(String name, int age, double weight){
    this.name = name;
    this.age = age;
    this.weight = weight;
  }
  //Atau dengan cara berikut:
  //Animal(this.name, this.age, this.weight);

  //Berikut beberapa contoh untuk mendeklarasikan
  //Named Contructor
  Animal.name(this.name);
  Animal.age(this.age);
  Animal.weight(this.weight);
}