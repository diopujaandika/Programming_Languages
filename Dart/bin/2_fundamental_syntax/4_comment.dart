///COMMNET adalah instruksi yang dibuat tetapi tidak akan dieksekusi (diabaikan) oleh komputer ketika program dijalankan.
/// Di dalam Dart terdapat 3 jenis comment yang dapat digunakan:
///1. Single line comment => //Comment
///2. Multi line comment => /**/Comment
///3. Documentation comment => ///Comment[Comment]

///Documentation Comment
///Fungsi [main] akan menampilkan 2 Output
///Output pertama menampilkan teks dan output kedua menampilkan hasil perkalian pada fungsi [calculate]

void main(List<String> arguments){
  //Single line Comment
  //Mencetak Hello Dart! Dart is great in konsole.
  print('Belajar Membuat Comment di Dart!');
  print("Hello Dart! Dart is that the Single line Comment.");
  
  //Multi line comment
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