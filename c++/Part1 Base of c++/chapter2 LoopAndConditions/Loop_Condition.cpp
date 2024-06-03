#include <iostream>

using std::cin;
using std::cout;
using std::endl;

void loopTableMult()
{
    for (int i = 1; i <= 10; i++)
    {
        for (int j = 1; j <= 10; j++)
        {
            cout << i * j << '\t';
        }
        cout << '\n';
    }
}

int main()
{
    int x;
    std::cin >> x;
    if (x <= 0)
    {
        std::cout << "zero or negative \n";
    }
    else if (x == 1)
    {
        std::cout << "one\n";
    }
    else if (x == 2)
    {
        std::cout << "two\n";
    }
    else
    {
        std::cout << "many\n";
    }

    loopTableMult();
}
