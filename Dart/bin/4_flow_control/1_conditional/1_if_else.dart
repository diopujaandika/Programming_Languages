/// IF & ELSE
/// If adalah salah satu flow control yang digunakan untuk menentukan alur program berdasarkan kondisi yang terjadi. 
/// Jika hasilnya adalah true maka program akan terus dijalankan dan jika false maka proses yang ditentukan akan dilewatkan.

void main(){
  controlIf();
  openShop();

  var score = 45;
  print('Nilai Anda: $score dalam range ${calculateScore((score))}');
}

//1. IF
void controlIf(){
  var isRaining = true;
  print("Prepare before going to offiece?");

  if(isRaining){
    print("Oh... It's raining, bring an umbrella.");
  }
  print("Going to the office!");
}

//2. IF-ELSE
void openShop(){
  var openHours = 8;
  var closeHours = 21;
  var now = 17;

  if(now > openHours && now < closeHours){
    print("Hello, we're open!");
  }else{
    print("Sorry, we've closed!");
  }
}

//3. IF, ELSE-IF, ELSE
String calculateScore(num score){
  if(score>90){
    return 'A';
  }else if(score>80){
    return 'B';
  }else if(score>70){
    return 'C';
  }else if(score>60){
    return 'D';
  }else{
    return 'E';
  }
}