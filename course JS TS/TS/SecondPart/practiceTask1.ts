type ValidAmount = "empty" | number;

interface ClothesWarehouse {
  jackets: ValidAmount;
  hats: ValidAmount;
  socks: ValidAmount;
  pants: ValidAmount;
}

interface StationeryWarehouse {
  scissors: ValidAmount;
  paper: "empty" | boolean;
}

interface AppliancesWarehouse {
  dishwashers: ValidAmount;
  cookers: ValidAmount;
  mixers: ValidAmount;
}

interface TotalWarehouse
  extends ClothesWarehouse,
    StationeryWarehouse,
    AppliancesWarehouse {
  deficit: boolean;
  date: Date;
}

const totalData: TotalWarehouse = {
  jackets: 5,
  hats: "empty",
  socks: "empty",
  pants: 15,
  scissors: 15,
  paper: true,
  dishwashers: 3,
  cookers: "empty",
  mixers: 14,
  deficit: true,
  date: new Date(),
};

function printReport(data: TotalWarehouse): string {
  //   const dataTuple: [string, "empty" | number | boolean][] =
  //     Object.entries(data);
  //   const dificitArr: string[] = [];

  //   for (let [k, v] of dataTuple) {
  //     if (v === "empty") {
  //       dificitArr.push(k);
  //     }
  //   }

  //   if (dificitArr.length > 0) {
  //     return `"We need this items: ${dificitArr.join(", ")}"`;
  //   }
  //   return "Everthing fine";

  const result: string = Object.entries(data)
    .filter((item) => item[1] === "empty")
    .reduce((res, item) => `${res} ${item[0]}, `, "");

  if (result.trim().length) {
    return `We need this items: ${result.slice(0, -1)}`;
  } else {
    return "Everthing fine";
  }
}

console.log(printReport(totalData));
