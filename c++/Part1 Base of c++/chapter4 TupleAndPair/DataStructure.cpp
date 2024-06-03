#include <iostream>
#include <tuple>

using namespace std;

enum class Color
{
    White,
    Red,
    Orange,
    Blue,
};

struct Point
{
    double x = 0.0;
    double y = 0.0;
    double z = 0.0;
    Color color;
};

int main(int argc, char const *argv[])
{
    Color color1 = Color::Red;
    Color color2 = Color::Blue;
    int value = static_cast<int>(color2);
    Color color3 = static_cast<Color>(2);

    cout << value << ", " << ";\n";

    Point point1;
    point1.color = Color::Blue;

    Point point2 = {1.4, -2.2, -3.98, Color::Red};

    point2.z = 32;
    point2.x += 2;

    cout << "x: " << point2.x << ", y: " << point2.y << ", z: " << point2.z << "\n";

    Point point3 = {.x = 1.4, .y = -2.2, .z = -3.98};
    Point point4 = {.color = Color::Orange};

    // pair
    pair<int, double> p = {33, 0.3};

    cout << p.first << "\n";
    cout << p.second << "\n";

    std::tuple<int, double, Point> t = {33, 3.14, {.color = Color::Orange}};

    cout << get<0>(t) << "\n";
    cout << get<1>(t) << "\n";
    cout << get<2>(t).x << "\n";

    pair<std::string, int> p1 = {"hello", 42};
    auto [word, freq] = p1;

    cout << word << " " << freq << "\n";

    return 0;
}
