
while True:
    num1 = float(input("Enter first number: "))
    num2 = float(input("Enter second number: "))
    print(num1 / num2)
    isContinue = input("Do you want continue(yes / no) ?  ") == 'yes'

    # continue if isContinue else break
    if (isContinue == False):
        break
