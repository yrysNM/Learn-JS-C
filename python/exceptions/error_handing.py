# try:
#     print(10)
# except ZeroDivisionError as e:
#     print(dir(ZeroDivisionError))
#     print('0️⃣   error ', e)
# except TypeError as e:
#     print(e)
# else:
#     print('No error')
# finally:
#     print('I dont care')

# print('NExt...')


# try:
#     print(10 / 0)
# except Exception as e:
#     print(e)


# def devide_nums(a, b):
#     if (b == 0):
#         raise ValueError("Second argiment can't be 0")
#         # raise TypeError("Second argiment can't be 0")

#     return a / b


# try:
#     devide_nums(10, 0)
# except TypeError as e:
#     print(e)


def image_info(imgObj):
    if ("image_id" in imgObj and 'image_title' in imgObj):
        print(f"Image {imgObj['image_title']} has id {imgObj['image_id']}")
    else:
        raise TypeError('ERROR img obj')


try:
    image_info({"image_title": "test", "image_id": "234"})
    image_info({"image_id": "234"})
except Exception as e:
    print(e)
