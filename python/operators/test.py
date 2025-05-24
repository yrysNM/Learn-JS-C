# def route_info(roadInfo):
#     if ("distance" in roadInfo and type(roadInfo['distance']) == int):
#         return f"Distance to your destination is {roadInfo['distance']}"

#     if ('speed' in roadInfo and "time" in roadInfo):
#         return f"Distance to your destination is {roadInfo['speed'] * roadInfo['time']}"

#     return "No distance info is available"


def route_info(route):
    res = 'No distance info is available'
    res = f"Distance yo your destination is {route['distance']}" if (
        ('distance' in route) and (type(route['distance']) == int)) else res
    res = f"Distance yo your destination is {route['speed'] * route['time']}" if (
        "speed" in route and "time" in route) else res
    return res


print(route_info({"distance": "234234"}))
print(route_info({"distance": 234234}))
