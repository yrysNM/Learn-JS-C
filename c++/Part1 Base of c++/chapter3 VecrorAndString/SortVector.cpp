#include <iostream>
#include <algorithm>

using namespace std;

int main(int argc, char const *argv[])
{
    vector<int> data = {3, 4, 2, 1, 5, 2, 5};

    cout << data.front() << data.back() << "\n";

    sort(data.begin(), data.end());
    cout << data.front() << data.back();

    return 0;
}
