#include <iostream>

using namespace std;

int main(int argc, char const *argv[])
{
    int x = 13;
    do
    {
        x--;
        cout << x << endl;
    } while (x > 10);

    int n, res;
    cout << "Enter the number for get sum n: ";
    cin >> n;

    for (int i = 1; i <= n; i++)
    {
        res += i;
    }
    cout << "Result: " << res << endl;

    cout << "10-нан 20-ға дейінгі сандардың квадраттары" << endl;

    int num1 = 10, num2 = 20;
    do
    {
        printf("%d= %d\n", num1, num1 * num1);
        num1++;
        // cout << "%d= ", num1 << num1 * num1 << endl;
    } while (num1 <= num2);

    return 0;
}
