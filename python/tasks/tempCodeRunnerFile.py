def merge_lists_to_dict(a1, a2):
    a3 = zip(a1, a2)
    return list(a3)


a1 = [1, 2, 3]
a2 = ['Alma', 'Ebby', 'Test']

print(merge_lists_to_dict(a1, a2))
