function titleToNumber(columnTitle: string): number {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",19
    
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const titleArray = columnTitle.split("");
  const lastTitleChart = titleArray[titleArray.length - 1];
  //   const res = titleArray.reduce((acc, curr, currIndex) => {
  let res = 0;
  if (titleArray.length >= 2) {
    res +=
      titleArray.slice(0, titleArray.length - 1).reduce((acc, curr) => {
        if (alphabet.includes(curr)) {
          acc += (alphabet.indexOf(curr) + 1) * 26;
        }

        return acc;
      }, 0) +
      (alphabet.includes(lastTitleChart)
        ? alphabet.indexOf(lastTitleChart) + 1
        : 0);
  } else {
    res += alphabet.includes(titleArray[0])
      ? alphabet.indexOf(titleArray[0]) + 1
      : 0;
  }

  return res;
}

console.log(titleToNumber("A"));
console.log(titleToNumber("ZY"));
console.log(titleToNumber("AA"));
console.log(titleToNumber("FXSHRXW"));
