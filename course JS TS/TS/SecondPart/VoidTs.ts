type voidFunc = () => void;

const retString: voidFunc = () => {
  // some margic
  return "string";
};

const s = retString();

console.log(s);

const retNum: voidFunc = () => {
  // ...
  return 5;
};
const n = retNum();
console.log(n);

const f2: number = (): void => {
  // error
  console.log(3);
};

const three = f2();

const names = ["Anna", "John"];

const newArr = names.slice();

names.forEach((name, i, arr) => arr.push("Hey!"));
