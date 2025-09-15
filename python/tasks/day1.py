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
    print(list[stIndex], stIndex + 1, endIndex)
    return resList
    

listNumber = [1, 2, 4, 5]

print(returnEvenNumberList( listNumber))

print(returnLongestWord(['Hello', 'WORD', "hello world"]))

print(nestedList([[1, 2], [3, 4], [5, 6]]))

print(rotateListKTime([1, 2,3, 4, 5], 2))