interface CurrenciesU {
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

type CurrWithoutUsa = Omit<CurrenciesU, "usa">; // -> изключение
type CurrenyUsaAndUkraine = Pick<CurrenciesU, "usa" | "ukraine">; // фильтр по свойству
type FadeType = Exclude<MyAnimationU, "swipe">; //  удаление из union type
type CountriesWithoutUsa = Exclude<keyof CurrenciesU, "usa">;
type SwipeType = Extract<MyAnimationU | DireactionU, "swipe">; // выбор подходящего типа

type CreateCustomCurrU<T> = {
  readonly [K in keyof T as `custom${Capitalize<string & K>}`]?: string;
};

type PlayersNames = "alex" | "john";
type CustomCurrenciesU = CreateCustomCurrU<CurrenciesU>;
type GameDataCurr = Record<PlayersNames, CustomCurrenciesU>; // obj with k v

const gameData: GameDataCurr = {
  alex: {
    customChina: "wfw",
    customKz: "ewfwef",
    customUkraine: "wfwef",
    customUsa: "wefwef",
  },
  john: {
    customChina: "wfw",
    customKz: "ewfwef",
    customUkraine: "wfwef",
    customUsa: "wefwef",
  },
};

type MyAnimationU = "fade" | "swipe";
type DireactionU = "in" | "out";
type MyNewAnimationU = `${MyAnimationU}${Capitalize<DireactionU>}`;
