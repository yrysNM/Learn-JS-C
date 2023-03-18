// condition ? true : false
// someType extends otherType ? TrueType : FalseType

const str: string = "Hello";
type Example = "string" extends typeof str ? string : number;
// type Example = "string" extends "Hello" ? string : number; // simple

type FromUserOrFromBase<T extends string | number> = T extends string
  ? IDataFromUser
  : IDataFromBase;

interface UserC<T extends "created" | Date> {
  created: T extends "created" ? "created" : Date;
}

const userC: UserC<"created"> = {
  created: "created",
};

interface IDataFromUser {
  weight: string;
}

interface IDataFromBase {
  colories: number;
}

// function calculateDailyCalories(str: string): IDataFromUser;
// function calculateDailyCalories(str: number): IDataFromBase;
// function calculateDailyCalories(
//   numOrStr: string | number
// ): IDataFromUser | IDataFromBase {
//   if (typeof numOrStr === "string") {
//     const obj: IDataFromUser = {
//       weight: numOrStr,
//     };
//     return obj;
//   } else {
//     const obj: IDataFromBase = {
//       colories: 500,
//     };
//     return obj;
//   }
// }

function calculateDailyCalories<T extends string | number>(
  numOrStr: T
): T extends string ? IDataFromUser : IDataFromBase {
  if (typeof numOrStr === "string") {
    const obj: IDataFromUser = {
      weight: numOrStr,
    };
    return obj as FromUserOrFromBase<T>;
  } else {
    const obj: IDataFromBase = {
      colories: 500,
    };
    return obj as FromUserOrFromBase<T>;
  }
}

type GetStringType<T extends "hello" | "world" | string> = T extends "hello"
  ? "hello"
  : T extends "world"
  ? "world"
  : string;

type GetFirstType<T> = T extends Array<infer First> ? First : T;

type Ex = GetFirstType<number[]>;

type ToArray<Type> = Type extends any ? Type[] : never;

type ExArray = ToArray<Ex>;
