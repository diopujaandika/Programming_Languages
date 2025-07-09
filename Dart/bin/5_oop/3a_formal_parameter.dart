///This Keyword in Constructor
///

class Person{
  String name = 'Guest';
  int? age;
  final String country = "Indonesia";

  Person(this.name, this.age);
}

void main(){
  var person1 = Person("Dio", 22);
  print(person1.name);
  print(person1.age);
  print("Hello, my name is ${person1.name}, Iam ${person1.age} years old");
}