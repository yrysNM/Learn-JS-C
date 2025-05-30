#include <iostream>
#include <algorithm>
using namespace std;

int test4(int start, int end)
{
    if (start == end)
    {
        return start;
    }
    else
    {
        return end + test4(start, end - 1);
    }
}

void test3()
{
    int i = 0, k = 0;
    int arrsize = 14;
    int a[14] = {4, 5, 3, 2, 1, 9, 1, 4, 5, 3, 2, 7, 9, 1};
    for (int i = 0; i < arrsize; i++)
    {
        // cout << i << " % " << 2 << " = " << i % 2 << "\n";
        if (i % 2 == 0)
            k++;
    }
    cout << k;
}

int source[] = {11, 44, 33, 11, 22, 33, 11, 22, 44};
int pattern[] = {11, 22, 33};
int test2()
{
    int *ptr;
    // cout << source << pattern << "\n";
    ptr = search(source, source + 9, pattern, pattern + 3);

    if (ptr == source + 9)
        cout << "Совпадения не найдено\n";
    else
        cout << "Совпадение в позиции " << (ptr - source) << endl;
    return 0;
}

string negative(int a[], int n)
{
    cout << a[n - 1] << endl;
    if (a[n - 1] < 0)
    {
        return "true";
    }
    else
    {
        return "false";
    }

    negative(a, n - 1);
}

void testFraqment()
{
    const int n = 10;
    int a[n] = {1, 2, 3, 4, 5, 5, 4, 3, 2, 1};
    for (int i = 0; i < 10; i++)
    {
        if (a[i] == a[n - 1 - i])
        {
            cout << "Yes";
        }
        else
        {
            cout << "No";
        }
    }
}

static int a = 0;

void func(int a)
{
    // f(a);
    /**
     * ERROR: ‘f’ was not declared in this scope
     * In function ‘void func(int)’:
     *   82 |     f(a);
     */
}

void f(int a)
{
    cout << a;
}

int main()
{

    int a1 = 5;
    int b = 0;
    int r = a1;
    r = b++;
    cout << a1 << endl; // 5
    cout << b << endl;  // 1
    cout << r << endl;  // 0

    cout << "-------------------" << endl;
    int a2 = 5;
    int b2 = 0;
    int *r2 = &a2;
    // *r2 = b2++; // post-increment
    // cout << a2 << endl;  // 0
    // cout << b2 << endl;  // 1
    // cout << *r2 << endl; // 0

    cout << "-------------------" << endl;
    *r2 = ++b2;          // pre-increment
    cout << a2 << endl;  // 1
    cout << b2 << endl;  // 1
    cout << *r2 << endl; // 1

    func(a);
    testFraqment();
    int a[10], n;
    for (int i = 0; i <= n; ++i)
    {
        cin >> a[i];
    }
    cout << negative(a, n) << endl;

    int ans = 27;
    ans -= 7;
    cout << ans << ", ";
    ans += 10;
    cout << ans << ", ";
    ans *= 2;
    cout << ans << ", ";
    ans /= 3;
    cout << ans << endl;

    test2();
    test3();
    cout << "\n"
         << test4(3, 8);

    return 0;
}
