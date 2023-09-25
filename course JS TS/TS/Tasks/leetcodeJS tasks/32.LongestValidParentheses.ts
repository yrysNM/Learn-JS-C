function longestValidParentheses(s: string): number {
  let res: string[] = [];
  let count = 0;

  const arrStr = s.split("");

  // while(arrStr.length > 0) {
  //     const strParenth = arrStr.pop();

  //     if()
  // }

  for (let i = 0; i < arrStr.length; i++) {
    const currentChar = arrStr[i];

    if (currentChar == "(" || currentChar == "{" || currentChar == "[") {
      res.push(currentChar);
    } else if (currentChar == ")" || currentChar == "}" || currentChar == "]") {
      if (arrStr.length <= 0) {
        return 0;
      }
      arrStr.pop();
      count += 1;
    }
  }

  return count + count;
}

console.log(longestValidParentheses("(()"));
console.log(longestValidParentheses(")()())"));
console.log(longestValidParentheses(""));
