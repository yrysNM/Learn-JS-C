// let userName: string = `Yrys`;

// userName = 'ggerg';

/**
 * type string -> '', "", ``
 * type number -> 10, 0.5, 0.00001, -50, 4e10
 * type boolean -> true, false
 */

const isBirthdayData: boolean = true;
let ageData: number = 19;
const userNameData: string = "Yrys";

// function logBrtMsg(isBirthday: boolean, userName: string, age: number): string {
//   if (isBirthday) {
//     return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
//   } else {
//     return "Error";
//   }
// }

// let salary: number;

// salary = 500;

// const userData = '{"isBirthdayData":true,"ageData":19,"userNameData":"Yrys"}';

// const userObj: {
//   isBirthdayData: boolean;
//   userNameData: string;
//   ageData: number;
// } = JSON.parse(userData);

const userData = {
  isBirthdayData: true,
  ageData: 19,
  userNameData: "Yrys",
  messages: {
    error: "Error",
  },
};

const userDataTuple: [boolean, number, ...string[]] = [
  true,
  19,
  "Yrys",
  "Erke",
  "Arsen",
];
// userDataTuple[3];
// userDataTuple.push(60);
// userDataTuple[3]; -> error only 3 element [boolean number string]

const res = userDataTuple.map((t) => `${t} - data`);

const [bithd, age, userName] = userDataTuple;

// console.log(userObj);

// never
const createError = (msg: string) => {
  throw new Error(msg);
};

const logBrtMsg = ({
  isBirthdayData,
  userNameData,
  ageData,
  messages: { error },
}: {
  isBirthdayData: boolean;
  userNameData: string;
  ageData: number;
  messages: { error: string };
}): string => {
  if (isBirthdayData) {
    return `Congrats ${userNameData.toUpperCase()}, age: ${ageData + 1}`;
  } else if (!isBirthdayData) {
    return "Too bad";
  }
  return createError(error);
};

// logBrtMsg(isBirthdayData, userNameData, 19);
console.log(logBrtMsg(userData));

const departments: string[] = ["dev", "design", "marketing"];

const departmenxt = departments[0];

// departments.push(2); // -> error only string
const report = departments
  .filter((d: string) => d !== "dev")
  .map((d: string) => `${d} - done`);
//   .map((d: string) => {
//     return 4;        // ->return nuber bolsa anaotation not forger !!!
//   })

const nums: number[][] = [
  [1, 2, 3, 5.23],
  [1, 2, 3, 5.23],
];

const [first] = report;
console.log(first);
