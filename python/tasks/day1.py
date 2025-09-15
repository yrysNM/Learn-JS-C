def returnEvenNumberList(listNumber): 
    return [number for number in listNumber if number % 2 == 0]

def returnLongestWord(words): 
    minWordLen = len(words[0])
    return [word for word in words if len(word) > minWordLen]


def nestedList(twoDlist: list[list[int]]): 
    return [item     for subList in twoDlist for item in subList]

def rotateListKTime(list: list[int], k): 
    resList = []
    endIndex = len(list)
    stIndex = endIndex - k
    resList = list[stIndex:endIndex] + list[0:stIndex]
    # resList.extend(list[stIndex:endIndex])
    return resList
    

def countCharacter(text): 
    dict = {}
    for chacter in text: 
        if(chacter in dict): 
            dict[chacter] += 1
        else: dict[chacter] = 1
    return dict


def mergeDict(dict1, dict2): 
    lenDict1 = len(dict1)
    lenDict2 = len(dict2)
    restDect = {}
    bigDict = dict1 | dict2
    for key in bigDict: 
        if(key in dict1 and key in dict2): 
            restDect[key] = dict1[key] + dict2[key]
        else: restDect[key] = bigDict[key]

    return restDect


def swapFirstLastElementTuple(tupleValue): 
    tempList = list(tupleValue); 
    firstIndex = 0; 
    lastIndex  = len(tempList) - 1
    tempList[firstIndex], tempList[lastIndex] = tempList[lastIndex], tempList[firstIndex]
    return tuple(tempList) 
    

print(returnEvenNumberList([1, 2, 4, 5])) # function that takes a list of numbers and returns a new list with only the even numbers.
print(returnLongestWord(['Hello', 'WORD', "hello world"])) # Given a list of words, return the longest word.
print(nestedList([[1, 2], [3, 4], [5, 6]])) # Flatten this nested list without using libraries
print(rotateListKTime([1, 3, 3, 4, 5], 4)) # Rotate a list k steps to the right (
print(countCharacter("TEST I WILL BURN WORLD")) # Count the frequency of each character in a string and return as a dictionary.
print(mergeDict(dict1 = {'a': 2, 'b': 4}, dict2= {'a': 5, 'c': 3}))

print(swapFirstLastElementTuple((1, 2, 3, 4)) )


set1 = {1, 2, 3, 4, 5}
set2 = {3, 4, 5, 6, 7}

common_elements = set1.intersection(set2)

unique_set = set([1, 2, 3, 4, 2, 4, 6])
print(common_elements, unique_set)

my_list = ['apple', 'banana', 'cherry']
for index, value in enumerate(my_list):
    print(f"Index: {index}, Value: {value}")