const isParenthesisValid = (validationString) => {

    let stack = [];

    for (let pos = 0; pos < validationString.length; pos++) {
        let currentChar = validationString.charAt(pos);

        if (currentChar == "(") {
            stack.push(currentChar);
        } else if (currentChar == ")") {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        }
    }

    return stack.length === 0;
}

console.log(isParenthesisValid("())({}}{()][]["));
console.log(isParenthesisValid("()(){}}{()][][]"));
console.log(isParenthesisValid("()())()"));
console.log(isParenthesisValid("())(()()"));
console.log(isParenthesisValid("(((()"));
console.log(isParenthesisValid("(())()"));		