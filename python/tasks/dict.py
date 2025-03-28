emptyDict = {}

keys = input("Enter keys for dick every key split with comma: ").split(",")
values = input(
    "Enter values for dick every value split with comma: ").split(",")

if len(keys) != len(values):
    print('Keys and values length must be equal!!!')
else:
    for i in range(len(keys)):
        emptyDict[keys[i]] = values[i]

    print(emptyDict)
