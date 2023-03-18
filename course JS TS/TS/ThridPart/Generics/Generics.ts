function processingData<T>(data: T): T {
  // ...

  return data;
}

let res1 = processingData(1);
let res2 = processingData("1");
const num = 10;
const res3 = processingData<number>(num);

interface printUK {
  design: number;
}

interface PrintES {
  design: string;
}

interface Print<Type> {
  design: Type;
}

const somePrint: Print<string> = {
  design: "ten",
};

const someOtherPrint: Print<number> = {
  design: 10,
};

// TS generics -> Array<T>
// use just generics-> T, U, V, S if props: P  key K/V
// more info -> IRefferSystem<UserID, userReferrals>
