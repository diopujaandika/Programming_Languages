class Animal {
  //Properties
  String _name = '';
  int _age = 0;
  double _weight = 0;
  // _variable tanda (_) berarti variable tidak bisa diakases dari luar berkas. Solusinya kita buat setter dan getter untuk mendapatkan nilai serta mengubahnya dari luar berkas

  // Setter
  set name(String value){
    _name = value;
  }
  //Getter
  double get weight => _weight;
  int get age => _age;

  //Constructor => 
  Animal(this._name, this._age, this._weight);

  //Methods
  void eat()  {
    print('$_name is eating!');
    _weight = _weight + 0.2;
  }
  void sleep() {
    print('$_name is sleeping!');
  }
  void poop() {
    print('$_name is pooping!');
    _weight = _weight - 0.1;
  }
}