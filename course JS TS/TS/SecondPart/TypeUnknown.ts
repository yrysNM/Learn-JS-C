// let smth: unknown;
// smth = "str";

// let data: string[] = smth; // -> error unknown type
// data.find((e) => e);

// const someValue: unknown = 10;
// someValue.method();

const fetchData = (data: unknown): void => {
  if (typeof data === "string") {
    console.log(data.toLowerCase());
  }
};

const userDataU = '{"isBirthdayData":true,"ageData":19,"userNameData":"Yrys"}';

function safeParse(s: string): unknown {
  return JSON.parse(s);
}

const data = safeParse(userDataU);

function transferData(d: unknown): void {
  if (typeof d === "string") {
    console.log(d.toUpperCase());
  } else if (typeof d === "object" && d) {
    console.log(d);
  } else {
    console.error("some error");
  }
}

transferData(data);

try {
  if (1) {
    throw new Error("error");
  }
} catch (e) {
  //   console.log(typeof e);
  if (e instanceof Error) {
    console.log(e.message);
  } else if (typeof e === "string") {
    console.log(e);
  }
}

type T0 = any | unknown;
type T1 = number | unknown;
type T2 = any & unknown;
type T3 = number & unknown;
