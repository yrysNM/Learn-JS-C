#include <iostream>
using namespace std;

void starline();

int main(int argc, char const *argv[])
{
    starline();
    cout << "Data typ: " << endl;
    starline();
    cout << "char -128...127 " << endl
         << "short -32..32 767" << endl;
    starline();
    return 0;
}

void starline()
{
    for (int j = 0; j < 45; j++)
    {
        cout << "*";
    }
    cout << endl;
}