#include <iostream>

using namespace std;

void information(string w = "007");
int sum(int a = 15, int b = 87);

void c()
{
    static int x = 0; // static is savce cache
    x++;
    cout << x << endl;
}

int main(int argc, char const *argv[])
{
    c();
    c();
    c();
    information("------------------");
    string w = "Astana";
    information(w);
    string w1 = "Almaty";
    information(w1);

    int j = 41;
    int result = sum(j, 50);
    information(to_string(result));

    sum(5, 5);
    information();
    sum();
    sum(85, 25);
    sum(55);
    return 0;
}

void information(string w)
{
    cout << w << endl;
    // int x = 0;
    // if (15 == 15)
    // {
    //     int x = 0;
    //     x++;
    // }
    // x++;
    // cout << x << endl;
}

int sum(int a, int b)
{
    // int x = 0;
    int res = a + b;
    information(to_string(res));
    // cout << res << endl;
    return res;
}