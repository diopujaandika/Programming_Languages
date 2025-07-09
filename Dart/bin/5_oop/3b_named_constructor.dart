///This Keyword in Constructor
///

class Person{
  String name = 'Guest';
  int? age;
  final String country = "Indonesia";

  Person(String name, int age){
    this.name = name;
    this.age = age;
  }

  Person.withName(this.name);

  Person.withAge(this.age);
}

void main(){
  var person1 = Person("Dio", 22);
  print(person1.name);
  print(person1.age);
  print("Hello, my name is ${person1.name}, Iam ${person1.age} years old");

  var person2 = Person.withName("Puja");
  print(person2.name);
  print(person2.age);
  print("Hello, my name is ${person2.name}, Iam ${person2.age} years old");

  var person3 = Person.withAge(23);
  print(person3.name);
  print(person3.age);
  print("Hello, my name is ${person3.name}, Iam ${person3.age} years old");
}