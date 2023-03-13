interface ProcessingM {
  <T>(data: T): T;
}

function processingM<T>(data: T): T {
  return data;
}

let newFunk: ProcessingM = processingM;

type Smth<T> = T;

// const num: Smth<number> = 2;

// type User<T> = {
//   login: T;
//   age: number;
// };

interface ParentOfUser {
  mother: string;
  father: string;
}

interface User<ParentsData extends ParentOfUser> {
  login: string;
  age: number;
  parents: ParentsData;
}

const user: User<{ mother: string; father: string; married: boolean }> = {
  login: "str",
  age: 19,
  parents: { mother: "Anna", father: "no data", married: true },
};

// const user2: User<string> = {
//   login: "str",
//   age: 19,
//   parents: "",
// };

type OrNull<Type> = Type | null;
type OneOrMany<Type> = Type | Type[];

const data: OneOrMany<number[]> = [5];

// const depositMoney = <T extends number | string>(amount: T): T => {
//   console.log(`req to server with amout: ${amount}`);
//   return amount;
// };

// depositMoney(500);
// depositMoney("500")
// depositMoney(false);

const depositMoney = (amount: number | string): number | string => {
  console.log(`req to server with amout: ${amount}`);
  return amount;
};

depositMoney(500);
depositMoney("500");
// depositMoney(false); // -> error
