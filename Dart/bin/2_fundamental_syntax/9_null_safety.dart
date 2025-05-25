///NULL SAFETY
///Memungkinkan suatu variable bernilai kosong (Null).

void main(){
  String? favoriteFood = null;
  buyAMeal(favoriteFood);
  String? favoriteDrink = 'Es Campur';
  buyADrink(favoriteDrink!);
}

//1. Cara pertama menggunakan (?) => Boleh Null
void buyAMeal(String? favoriteFood){
  if(favoriteFood == null){
    print('I bought a Nasi Goerng!');
  }else{
    print('I bought a $favoriteFood');
  }
}

//2. Cara kedua menggunakan (!) => Null sementara tetapi di akhir harus tidak boleh null
void buyADrink(String favoriteDrink){
  print('I bought a $favoriteDrink');
}