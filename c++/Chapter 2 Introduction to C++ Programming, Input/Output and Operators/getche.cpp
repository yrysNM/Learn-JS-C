#include <iostream>
using namespace std;
#include <conio.h>

int main(int argc, char const *argv[])
{
    int chcout = 0;
    int wdcount = 1;
    char ch = 'a';
    cout << "Enter string";
    while (ch != '\r')
    {
        ch = getche();
        if (ch == ' ')
        {
            wdcount++;
        }
        else
        {
            chcout++;
        }
    }
    cout << "\nWord: " << wdcount << endl;
    cout << "Letters: " << (chcout - 1) << endl;
    return 0;
}
