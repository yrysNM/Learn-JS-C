// Создать Generic-интерфейс PlayerData, который подходил бы для создания таких объектов:
interface IPlayer<GameT, HoursT> {
  game: GameT;
  hours: HoursT;
  server: string;
}

const player1: IPlayer<string, number> = {
  game: "CS:GO",
  hours: 300,
  server: "basic",
};

const player2: IPlayer<number, string> = {
  game: 2048,
  hours: "300 h.",
  server: "arcade",
};

const player3: IPlayer<string, { total: number; inMenu: number }> = {
  game: "Chess",
  hours: {
    total: 500,
    inMenu: 50,
  },
  server: "chess",
};

// Массив данных с фигурами содержит объекты, у каждого из которых обязательно есть свойство name
// Каждый объект может еще содержать дополнительные свойства в случайном виде
// Свойство name может иметь только 4 варианта
// Функция calculateAmountOfFigures должна принимать массив с объектами, у которых обязательно должно быть свойство name
// Возвращает она объект-экземпляр AmountOfFigures
// Внутри себя подсчитывает сколько каких фигур было в массиве и записывает результаты в AmountOfFigures
// С текущими данными в консоль должно попадать:
// { squares: 3, circles: 2, triangles: 2, others: 1 }

interface AmountOfFigures {
  squares: number;
  circles: number;
  triangles: number;
  others: number;
}

interface objData {
  [key: string]: number;
}

type dataName = "rect" | "triangle" | "line" | "circle";

interface IData<dataT> {
  name: dataName;
  data?: dataT;
}

function calculateAmountOfFigures<T extends IData<objData>>(
  figure: T[]
): AmountOfFigures {
  let res: AmountOfFigures = {
    squares: 0,
    circles: 0,
    triangles: 0,
    others: 0,
  };

  if (figure.every((s) => s.name)) {
    figure.forEach((d) => {
      // if(!res[d.name]) {
      //     res[d.name] = 0
      // }else {
      //     res[d.name] += 1;
      // }
      switch (d.name) {
        case "circle":
          res["circles"] += 1;
          break;
        case "triangle":
          res["triangles"] += 1;
          break;
        case "rect":
          res["squares"] += 1;
          break;
        default:
          res["others"] += 1;
      }
    });
  }

  return res;
}

const dataFigure: IData<objData>[] = [
  {
    name: "rect",
    data: { a: 5, b: 10 },
  },
  {
    name: "rect",
    data: { a: 6, b: 11 },
  },
  {
    name: "triangle",
    data: { a: 5, b: 10, c: 14 },
  },
  {
    name: "line",
    data: { l: 15 },
  },
  {
    name: "circle",
    data: { r: 10 },
  },
  {
    name: "circle",
    data: { r: 5 },
  },
  {
    name: "rect",
    data: { a: 15, b: 7 },
  },
  {
    name: "triangle",
  },
];

console.log(calculateAmountOfFigures(dataFigure));
