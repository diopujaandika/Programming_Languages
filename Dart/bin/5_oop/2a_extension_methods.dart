///Extension Method 
///Extension Method adalah cata menambahkan method terhdap Class yang sudah ada, tanpa mengubah Class tersebut
///Hal ini kadang bermanfaat jika misal Classnya adalah Class miliki library yang buka kita yang memembuatnya
///Memabuat Extension Method hampir mirip dengan membuat Class, namun kita perlu menggunakan:
///Sintak => extension NameExtension on NameClass

class Person{
  String name = "Guest";
  String? address;
  final String country = "Indonesia";

  void sayHello(){
    print('My name is $name');
  }
}

//Extension Method
extension GoodByeOnPerson on Person{
  void sayGoodBye(String paramName){
    print('Good bye $paramName, from $name');
  }
}

void main(){
  var person1 = Person();
  person1.name = "Budi Haryanto";
  print(person1.name);
  person1.sayGoodBye("Dio Puja Andika");
}