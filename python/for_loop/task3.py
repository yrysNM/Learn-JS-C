dict_one = {
    "a1": "Hello",
    "b2": "world",
}

dict_two = {k: v.upper() for k, v in dict_one.items()}

print(dict_two)
print(dict_one)


# str_list = ['hello world',  'python cool', 'js awful', 'te']

# filter_str = [text for text in str_list if len(text) > 10]

# print(filter_str)
