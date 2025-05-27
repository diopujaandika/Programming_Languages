void main() {
  print('Creating the future');
  print('main() done');

  contoh();
}

void contoh(){
  final myFuture = Future(() {
    print('Creating the future');
    return 12;
  });
  print('main() done');
}
