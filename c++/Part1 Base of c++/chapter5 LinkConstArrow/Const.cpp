int main(int argc, char const *argv[])
{
    int x = 33;
    int &ref = x;
    const int &cref = x;
    ++x;
    ++ref;
    // ++cref; // error

    int *ptr = &x;
    const int *cptr = &x;
    ++*ptr;
    // ++*cptr; error

    const int cx = 32;
    // int& ref2 = cx;  шибка компиляции: константность нельзя убрать
    const int &cref2 = cx;

    //  int* ptr = &cx;  // тоже ошибка компиляции
    const int *cptr = &cx; // OK

    return 0;
}
