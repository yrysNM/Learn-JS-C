#include <iostream>

using namespace std;

int main(int argc, char const *argv[])
{
    int num1;
    cout << "Enter the number: ";
    cin >> num1;

    if (num1 < 30 && num1 != 21 && num1 > 8)
    {
        cout << "+" << endl;
    }
    return 0;
}
