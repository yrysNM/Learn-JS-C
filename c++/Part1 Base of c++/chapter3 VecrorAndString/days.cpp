#include <iostream>

int main(int argc, char const *argv[])
{
    int month, day, total_days;
    int days_per_month[12] = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
    std::cout << "Enter month (start 1, end to 12): ";
    std::cin >> month;
    std::cout << "Enter days: ";
    std::cin >> day;

    total_days = day;
    for (int j = 0; j < month - 1; j++)
    {
        total_days += days_per_month[j];
    }

    std::cout << "Общее число дней с начала года: " << total_days << std::endl;

    return 0;
}
