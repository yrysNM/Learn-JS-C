photo_s = {"1920x1200", "800x400"}
test_s = {"1920x1200", "500x400"}

common_s = photo_s & test_s
print(common_s)

num_1 = {1, 2, 3, 4}
num_2 = {3, 2, 4}
num_1.add(33)

num_3 = {2, 3, 1, 5}

common_num = num_1.intersection(num_2)

print(common_num)

print(list(common_num))


set_one = set("123", '234')
set_two = set("123", '234')


print(set_one == set_two)
