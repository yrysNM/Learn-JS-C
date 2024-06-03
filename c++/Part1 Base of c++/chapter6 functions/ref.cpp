#include <iostream>
using namespace std;

int main(int argc, char const *argv[])
{
    void intfrac(float, float &, float &);
    float number, intpart, fracpart;
    do
    {
        cout << "\nEnter number: ";
        cin >> number;
        intfrac(number, intpart, fracpart);
        cout << "NUmber part equal " << intpart << ", float part equal " << fracpart << endl;
    } while (number != 0.0);
    /* code */
    return 0;
}

void intfrac(float n, float &intp, float &fracp)
{
    long temp = static_cast<long>(n);
    intp = static_cast<float>(temp);
    fracp = n - intp;
}
