# def dict_to_list(dictInfo):
#     res = []
#     for k, v in dictInfo.items():
#         if (type(v) == int):
#             v *= 2
#         res.append((k,  v))
#     return res


# print(dict_to_list({"a": 3, "b": []}))


def filter_lsit(list_data, type_info):
    # res = []
    # for value in list_data:
    #     if (type(value) == type_info):
    #         res.append(value)

    # return res

    # return list_data.filter(data => type(data) == type_info)

    # def check_element_type(el):
    # return type(el) == type_info

    # return list(filter(check_element_type, list_data))
    return list(filter(lambda el: type(el) is type_info, list_data))


print(filter_lsit([35, True, 'abds', 10], str))
