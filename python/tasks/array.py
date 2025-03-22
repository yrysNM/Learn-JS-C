# arr = [1, "Test", True, {'a': 'b'}, 234.234]

# # del arr[2]
# arr.pop(2)
# print(len(arr))
# arr.reverse()
# arr2 = ["Hello", "World"]
# arr.extend(arr2)
# print(arr)
# print(arr2)

# TASK1
my_list = ['abc', 5, 10.5, True, [1]]

print(my_list)

my_list.pop(2)

print(len(my_list))
print(my_list)

my_list.reverse()
print(my_list)

other_list = [True, {'a': 10}]

my_list.extend(other_list)

print(my_list)
print(other_list)


# TASK2
arr1 = [1, 2, 3]
arr2 = ['test',  True]

# arr3 = arr1 + arr2
arr3 = arr1.__add__(arr2)
print(arr3)
