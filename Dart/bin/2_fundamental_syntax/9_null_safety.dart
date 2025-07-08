///NULL SAFETY
///Pengertian
///Null Safety adalah keadaan dimana suatu variable belum di inisialisasi sehingga nilai dari variable bernilai kosong (Null).

///Kegunaan
///Terkadang dalam kasus tertentu kita membutuhkan suatu variable konsong (Null), walapun hal ini dapat menyebabkan crash ppada program.

//Cara menggunakan null safety
///1. Mengubah versi Dart di environment
      ///Untuk menggunakan Null Safety kita haus menggunakan Dart versi 2.12 Anda dapat mengubah versi Dart pada berkas pubspec.yaml.
      ///environment:
      ///   sdk: '>=2.12.0 <3.0.0'
/// 2. Menggunakan deklarasi secara eksplisit
      /// int age = null; => terjadi error
      /// String? favoriteFood = null; => tanda ? mengartikan variable boleh memiliki nilai null (non-nullable)

///ada 2 tanda yang harus diingat yaitu ? (boleh null) dan ! (tidak boleh null)
///namaVariabel?, itu berarti variable boleh bernilai kosong (null)
///namaVaribale!, itu berarti variable tidak boleh bernilai kosong (null)


void main(){
  String? favoriteFood = null;
  buyAMeal(favoriteFood);
  String? favoriteDrink = 'Es Campur';
  buyADrink(favoriteDrink!);
}

//1. Cara pertama menggunakan (?) => Boleh Null
void buyAMeal(String? favoriteFood){
  if(favoriteFood == null){
    print('I bought a Nasi Goreng!');
  }else{
    print('I bought a $favoriteFood');
  }
}

//2. Cara kedua menggunakan (!) => Null sementara tetapi di akhir harus tidak boleh null
void buyADrink(String favoriteDrink){
  print('I bought a $favoriteDrink');
}