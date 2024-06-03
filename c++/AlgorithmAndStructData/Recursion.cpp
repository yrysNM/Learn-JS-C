#include <iostream>
#include <string>
#include <cmath>

using namespace std;

int recursiveSum(int n)
{
    if (n <= 1)
    {
        return 1;
    }
    else
    {
        return n + recursiveSum(n - 1);
    }
}

int evenSquares(int n)
{
    if (n == 0)
    {
        return n;
    }
    else if (n % 2 == 0)
    {
        return n * n + evenSquares(n - 1);
    }
    else
    {
        return evenSquares(n - 1);
    }
}

int evenSquares2(int n)
{
    if (n == 0)
    {
        return n;
    }
    else
    {
        return pow(n + n, 2) + evenSquares(n - 1);
    }
}

int main(int argc, char const *argv[])
{

    int sumOfNumbers = recursiveSum(5);
    int sumOfEventSquares = evenSquares2(2);
    cout << sumOfEventSquares << endl;
    /* code */
    return 0;
}
