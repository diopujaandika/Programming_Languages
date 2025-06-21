///COMMNET
///1. Single line comment => //
///2. Multi line comment => /**/
///3. Documentation comment => ///

///Fungsi [main] akan menampilkan 2 Output
///Output pertama menampilkan teks dan output kedua menampilkan hasil perkalian pada fungsi [calculate]

void main(List<String> arguments){
  //Mencetak Hello Dart! Dart is great in konsole.
  print("Hello Dart! Dart is that the Single line Comment.");
  /*
   * Multi line commnet
   */
  print("Multi line Comment! 6 * 7 = ${calculate()}");
}

int calculate(){
  return 6*7;
}

/**
 * Output:
 * Hello Dart! Dart is that the Single line Comment.
 * Mutli line Comment! 6 * 7 = 42
 */