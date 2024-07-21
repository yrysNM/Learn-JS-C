#include <iostream>

using namespace std;

int main(int argc, char const *argv[]) {
  int a = 5;
  int b = 7 - a++;
  cout << b << " " << a;
  return 0;
}
