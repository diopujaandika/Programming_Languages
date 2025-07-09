void main(){
  var person1 = Person(); //Object

  person1.name = "Dio Puja Andika";
  person1.address = "Bengkulu";
  
  print(person1.name);
  print(person1.address);
  print(person1.countrty);
  person1.sayHallo("Budi Haryanto");
  person1.hello();
  print(person1.getName());
}

class Person {
  //Field || Properties
  String name = "Guest";
  String? address;
  final String countrty = "Indonesia";

  //Method 
  void sayHallo(String paramName){
    print('Hallo $paramName, My Name is $name');
  }
  
  void hello(){
    print('Hello, my name is $name');
  }

  String getName(){
    return "Heloo, my name is $name";
  }
}