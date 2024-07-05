#include <iostream>

using namespace std;

void showNumberValue(int a = 0, int b = 0);
string showString(string s1, string s2);
void showString(int num1, int num2);
void showString(int num1, char logicalOperator);

int main(int argc, char const *argv[])
{
    int num1 = 3, num2 = 4;
    // cout << "Enter the number 1: ";
    // cin >> num1;
    // cout << "Enter the number2: ";
    // cin >> num2;
    showNumberValue(num1, num2);

    cout << showString("Hellow", "world!") << endl;
    showString(3, 5);
    showString(5, '+');

    return 0;
}

void showNumberValue(int a, int b)
{
    if (a > b)
    {
        cout << a << " > " << b;
    }
    else if (a < b)
    {
        cout << a << " < " << b;
    }
    else if (a == b)
    {
        cout << a << " == " << b;
    }
    else
    {
        cout << "unknow number value";
    }

    cout << endl;
};

string showString(string s1, string s2)
{
    return s1 + " " + s2;
}

void showString(int num1, int num2)
{
    cout << num1 << endl;
    cout << num2 << endl;
}

void showString(int num1, char ch)
{
    cout << num1 << " " << ch;
}