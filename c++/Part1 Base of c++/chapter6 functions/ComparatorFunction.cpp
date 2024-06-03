#include <algorithm>
#include <iostream>
#include <vector>

struct Date
{
    int year = 1970;
    int month = 1;
    int day = 1;
};

bool operator<(const Date &lhs, const Date &rhs)
{
    if (lhs.year != rhs.year)
    {
        return lhs.year < rhs.year;
    }
    if (lhs.month != rhs.month)
    {
        return lhs.month < rhs.month;
    }
    return lhs.day < rhs.day;
}

bool operatorTie(const Date &lhs, const Date &rhs)
{
    return std::tie(lhs.year, lhs.month, lhs.day) < std::tie(rhs.year, rhs.month, rhs.day);
}

bool CompareWithoutYear(const Date &lhs, const Date &rhs)
{
    return std::tie(lhs.month, lhs.day) < std::tie(rhs.month, rhs.day);
}

int main(int argc, char const *argv[])
{
    std::vector<Date> dates = {
        {2020, 3, 15},
        {2019, 1, 21},
        {2021, 1, 30}};

    std::sort(dates.begin(), dates.end(), operatorTie);

    for (const auto &[year, month, day] : dates)
    {
        std::cout << year << "." << month << "." << day << "\n";
    }
    /* code */
    return 0;
}
