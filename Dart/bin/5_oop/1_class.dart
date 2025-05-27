///CLASS
void main(){
  //Pemanggilan class
  var dicodingCat = Animal('Gray', 2, 3.4);

  dicodingCat.eat();
  dicodingCat.poop();

  print(dicodingCat.weight);
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
