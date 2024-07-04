#include <iostream>

using namespace std;

int main(int argc, char const *argv[])
{
    // pointer variable
    int b = 10;
    int *p;
    p = &b; // pointer
    // cout << *p << ", " << p; // *p керы корсеткыш

    // link variable
    int j = 6;
    int &ref1 = j;
    // ref1 = 10;
    // cout << j << ", " << ref1 << " " << &ref1;

    cout << &b << "\t" << p << endl;

    int *u3 = new int;
    *u3 = 10;
    cout << *u3 << endl;
    delete u3;
    u3 = nullptr;
    if (u3 == nullptr)
    {
        cout << "u3 variable removed from CPU" << endl;
    }

    int a[] = {5, 7, 8, 1, 2};
    // int *c = a; // only first index element pointer (5)
    //  int (*c)[5] = a;
    //  int (*b)[5] = &a;
    int *c = a;
    for (int i = 0; i < 5; i++)
    {
        // cout << c[i] << "\t" << &c[i] << endl;
        // cout << *c + i << "\t" << &c[i] << endl;
        cout << *(c + i) << "\t" << &c[i] << endl;
    }

    float taskNum1 = 8.1;
    float *taskNum2 = &taskNum1;
    float *taskNum3 = taskNum2;
    taskNum1 = 59.4;
    cout << "taskNum1= " << taskNum1 << "\t" << "taskNum2= " << *taskNum2 << "\t" << "taskNum3= " << *taskNum3 << endl;

    double taskD1 = 5.4;
    double *taskD2 = &taskD1;
    double *taskD3 = taskD2;
    *taskD3 = 3.3;

    cout << taskD1 << " " << *taskD2 << " " << *taskD3 << endl;

    return 0;
}
