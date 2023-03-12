interface User {
  readonly login: string;
  password: string;
  age: number;
  // address?: string,
  address: string | undefined;
  parents?: {
    mother?: string;
    father?: string;
  };
}

const user: User = {
  login: "first!",
  password: "qwert",
  age: 19,
  address: "egergwfe",
};

const userFreeze: Readonly<User> = {
  login: "first!",
  password: "qwert",
  age: 19,
  address: "egergwfe",
};

// userFreeze.age = 23; // -> error readonly
// userFreee.password = "wefwef"; // -> error readonly obj

class Animal {
  readonly name: string = "name";
}

const dbName = "12345";

function sendUserData(obj: User, db?: string): void {
  console.log(obj.parents?.father?.toLowerCase(), db?.toLocaleLowerCase());
}

const basicPorts: ReadonlyArray<number> = [3000, 3001, 5555];
// const basicPorts: readonly number[] = [3000, 3001];
// basicPorts[0] = 5; // -> error readonly
// basicPorts.push(344) // -> error readonly

// const basicPorts: readonly [number, ...string[]] = [3000, "3001", "5555"];
// basicPorts[0] = 5; // -> error readonly
// basicPorts.push(344) // -> error readonly
