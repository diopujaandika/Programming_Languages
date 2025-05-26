///PROPERTY PRIVITE (_nameProperty)

void main(){
  var dicodingCat = Animal('Gray', 2, 3.4);

  dicodingCat.eat();
  dicodingCat.poop();

  print(dicodingCat.weight);
}

class Animal {
  String _name = '';
  int _age = 0;
  double _weight = 0;

  Animal(this._name, this._age, this._weight);

  // Setter => Memungkinkan Property Private diakses dari luar
  set name(String value) {
    _name = value;
  }

  // Getter Setter => Memungkinkan Property Private diakses dari luar
  double get weight => _weight;
  int get age => _age;

  // Methods
  void eat() {
    print('$_name is eating.');
    _weight = _weight + 0.2;
  }

  void sleep() {
    print('$_name is sleeping.');
  }

  void poop() {
    print('$_name is pooping.');
    _weight = _weight - 0.1;
  }
}