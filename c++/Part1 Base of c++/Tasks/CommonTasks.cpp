#include <iostream>
#include <cmath>
using namespace std;

void Dune()
{
    double centimeters;
    cin >>
        centimeters;

    double inches = centimeters / 2.54;

    cout << inches << "\n";
}

void idLineTriangle(int a, int b, int c)
{
    cin >> a >> b >> c;
    int sqA = pow(a, 2);
    int sqB = pow(b, 2);
    int sqC = pow(c, 2);
    if (a + b <= c || a + c <= b || b + c <= a)
    {
        cout << "UNDEFINED \n";
    }
    else if (sqA + sqB == sqC || sqB + sqC == sqA || sqA + sqC == sqB)
    {
        cout << "YES\n";
    }
    else
    {
        cout << "No\n";
    }
}

int main(int argc, char const *argv[])
{
    Dune();
    return 0;
}
