const fetchDataTypeAssertion = (url: string, method: "GET" | "POST"): void => {
  console.log(method);

  console.log("Fetched!");
};

// const reqOptions = {
//   url: "https://someurl.com",
//   method: "GET" as "GET",
// } as const;

const reqOptions = {
  url: "https://someUrl.com",
  method: "GET",
};

const str = "str";
const method = "method";

fetchDataTypeAssertion("qqq", "GET");
// fetchDataTypeAssertion(reqOptions.url, reqOptions.method as "GET");
// fetchDataTypeAssertion(reqOptions.url, reqOptions.method);

fetchDataTypeAssertion(reqOptions.url, <"GET">reqOptions.method);

const box = document.querySelector(".box") as HTMLElement;
// box.style.cssText = `
// border: 1px solid red;
// width: 100px;
// height: 100px;`;

// box?.classList.add("test");

const input = document.querySelector("input") as HTMLInputElement;

// const someNumber: number = input.value as any as number;

const someNumber: number = +input.value;
console.log(someNumber * 2);
console.log(someNumber.toFixed());

let a = "value" as const;

let b = { f: 10 } as const;

let c = [] as const;

let value = "value";
let arrA = ["sd", "diff"];
let obj = { f: 100 };

// let T0 = value as const;  // error -> link work

// let T5 = (Math.round(Math.random() * 1) ? "yes" : "no") as const; // error -> union
