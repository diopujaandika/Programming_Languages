///COLLECTION
///MAP digunakan untuk menyimpan data dengan key-value
///Sintak membuat map
///variable nameMap = {
///   key (data anyDataType) : value (data anyDataType),
///   key (data anyDataType) : value (data anyDataType),
///   key (data anyDataType) : value (data anyDataType),
///   ...
///};


void main(){
  myMap();
}

void myMap(){
  var dynamicVar = {
    'huruf': true,
    1: 'Apa?',
    false: 123.0,
  };

  print(dynamicVar);

  //Untuk mengetahui key di dalam map => keys
  var mapKeys = dynamicVar.keys;
  print(mapKeys);

  //Untuk mengetahui nilai di dalam map => values
  var mapValues = dynamicVar.values;
  print(mapValues);

  //Untuk menambahkan key-value
  dynamicVar['Key Baru'] = 14;
  print(dynamicVar);
}