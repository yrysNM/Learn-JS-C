#include <iostream>

using namespace std;

int main(int argc, char const *argv[]) {
  int num1 = -34;
  unsigned num2 = 4;
  char ch1 = 'R';
  long double dnum1 = 23.093433;
  long lnum1 = 40000;
  bool b1 = true;
  short int snum1 = 0;

  // mini calculator
  int a;
  int b;
  char actionValue;
  cout << "Enter the first number: ";
  cin >> b;
  cout << "Enter the second number: ";
  cin >> a;

  cout << "Enter action(+, -, /, *): ";
  cin >> actionValue;

  int res;

  switch (actionValue) {
  case '+':
    res = a + b;
    break;
  case '-':
    res = a - b;
    break;
  case '/':
    res = a / b;
    break;
  case '*':
    res = a * b;
    break;
  default:
    res = 0;
  }

  cout << "Result: " << res << endl;

  return 0;
}
