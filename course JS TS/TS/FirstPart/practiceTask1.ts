const currRate = "1.05";

const fetchCurr = (response: string): number => {
  const data: number = JSON.parse(response);

  return data;
};

function transferEurToUsd(
  available: boolean,
  amout: number,
  commmision: number
): void {
  if (available) {
    let res: number = fetchCurr(currRate) * amout * commmision;

    console.log(res);
  } else {
    console.log("Сейчас обмен недоступен");
  }
}

transferEurToUsd(true, 500, 1.05);
