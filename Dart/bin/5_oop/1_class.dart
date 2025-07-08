///CLASS
///Class itu blueprint untuk membuat objek
///Gunakan keyword class PascalCase

void main(){
  //Pemanggilan class
  var dicodingCat = Animal('Gray', 2, 3.4);

  dicodingCat.eat();
  dicodingCat.poop();

  print(dicodingCat.weight);

  //Class Person
  var person1 = Person();
  //Cara manipulasi fiel/properti
  person1.name = "Dio Puja Andika";
  person1.address = "Jakarta";
  //person1.country = "Singapore" ; tidak bisa karena variable itu Final

  //Mengambil nilai dari fiel/properti
  print(person1.name);
  print(person1.address);
  print(person1.country);
}

class Animal{
  //Properties
  String name;
  int age;
  double weight;

  //Constructor
  Animal(this.name, this.age, this.weight);

  //Methods
  void eat(){
    print('$name is eating!');
    weight = weight + 0.2;
  }

  void poop(){
    print('$name is pooping!');
    weight = weight - 0.1;
  }

  void sleep(){
    print('$name is sleeping!');
  }
}

//Contohh
class Person{
  //Cara mambuat field/properti
  String name = "Guest";
  String? address; //? menunjukan bahwa field boleh null
  final String country = "Indonesia"; //Variable bersifat immutable
}
