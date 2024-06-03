#include <iostream>
#include <vector>

using namespace std;

int main()
{
    size_t m, n;

    cin >> m >> n;

    vector<vector<int>> matrix(m, vector<int>(n));

    for (size_t i = 0; i != m; ++i)
    {
        for (size_t j = 0; j != n; j++)
        {
            cin >> matrix[i][j];
        }
    }

    for (size_t i = 0; i != m; ++i)
    {
        for (size_t j = 0; j != n; j++)
        {
            cout << matrix[i][j] << "\t";
        }
        cout << "\n";
    }
}