#include <iostream>

using namespace std;

int main(int argc, char const *argv[])
{
    int num1;
    int num2;

    cout << "Enter two integers to compare: ";
    // cin >> num1 >> num2;
    num1 = 5;
    num2 = 3;

    if (num1 == num2)
    {
        cout << num1 << " == " << num2 << endl;
    }
    if (num1 != num2)
    {
        cout << num1 << " != " << num2 << endl;
    }
    if (num1 < num2)
    {
        cout << num1 << " < " << num2 << endl;
    }
    if (num1 > num2)
    {
        cout << num1 << " > " << num2 << endl;
    }
    if (num1 <= num2)
    {
        cout << num1 << " <= " << num2 << endl;
    }
    if (num1 >= num2)
    {
        cout << num1 << " >= " << num2 << endl;
    }

    cout << R"~~~(
        ССС     +      +
       С        +      +
      С       +++++  +++++
       С        +      +
        ССС     +      +
    )~~~";

    return 0;
}
