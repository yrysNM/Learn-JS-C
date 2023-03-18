interface Currencies {
  usa: "usd";
  china?: "cny";
  readonly kz: "tenge";
  ukraine: "uah";
}

// type CustomCurrencies = {
//   usa: string;
//   china: string;
//   kz: string;
//   ukraine: string;
// };

type CreateCustomCurr<T> = {
  readonly [K in keyof T as `custom${Capitalize<string & K>}`]?: string;
};

type CustomCurrencies = CreateCustomCurr<Currencies>;

type Keys = "name" | "age" | "role";

type UserM = {
  [K in Keys]: string;
};

const alex: UserM = {
  name: "Alex",
  age: "25",
  role: "admin",
};

/**
 * @TemplateLiteralTypes
 */

type MyAnimation = "fade" | "swipe";
type Direaction = "in" | "out";
type MyNewAnimation = `${MyAnimation}${Capitalize<Direaction>}`;
