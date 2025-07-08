///EXCEPTIONS
  ///Exceptions adalah keadaan saat aplikasi di runtime terjadi error atau crash.
  ///Ketika exception terjadi, aplikasi akan dihentikan dan kode program setelahnya tidak akan dieksekusi.
  ///Exceptions memiliki setidaknya 3 block dasar yaitu:
    ///1. try => untuk menampung kode-kode yang kemungkinan terjadi error atau crash
    ///2. on Exception => untuk mengatasi exception yang diketahui secara spesifik
    ///3. catch => untuk mengatasi exception yang tidak diketahui secara spesifik
    ///4. final => untuk tetap menjalankan kode tanpa peduli hasi dari yang teradi pada blok try-catch

void main(){
  try{  //block try digunakan sebagai block kode yang kemungkinan terjadi erro/crash
    var a = 7;
    var b = 0;
    print(a ~/ b);
  } catch (e, s){ //block mengatasi exceptions 
    print('Exception happened: $e');
    print('Stack trace: $s');
  }finally{ //block yang akan terus dijalan walaupun terdapat excepstion
    print("finally tetap akan dijalankan tanpa memperdulikan try dan catch.");
    print("this line still executerd!");
  }
}