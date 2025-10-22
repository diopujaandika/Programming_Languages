///COMMNETS 
///Pengertian: Instruksi yang dibuat tetapi tidak akan dieksekusi (diabaikan) oleh komputer ketika program dijalankan.
///Fungsi: Memberikan catatan penting pada kode program.
///Jenis: Di dalam Dart terdapat 3 jenis comment yang dapat digunakan:
///1. Single line comment => //Comment
///2. Multi line comment => /**/Comment
///3. Documentation comment => ///Comment atau /**

///Documentation Comment
///Fungsi [main] akan menampilkan 2 Output
///Output pertama menampilkan teks dan output kedua menampilkan hasil perkalian pada fungsi [calculate]

void main(List<String> arguments){
  //Single line Comment
  print('Belajar Membuat Comment di Dart!');
  print("Hello Dart! Dart is that the Single line Comment.");
  
  //Multi line comment
  /* 
   * Line 1
   * Line 2
   * Line 3
   * Dst.
   */
  print("Multi line Comment! 6 * 7 = ${calculate()}");
  print("Dio");
}

int calculate(){
  return 6*7;
}
/**
 * Output:
 * Hello Dart! Dart is that the Single line Comment.
 * Mutli line Comment! 6 * 7 = 42
 */