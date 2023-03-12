interface UserNotNull {
  login: string;
  password: string;
  age: number;
  addr: string | undefined;
  parents?: {
    mother?: string;
    father?: string;
  };
}

const userNotNull: UserNotNull = {
  login: "first!",
  password: "qwert",
  age: 30,
  addr: "dsfsdf",
};

let dbNameT: string;

sendUserDataT(userNotNull, "ferfeerfe");

console.log(dbNameT!);

function sendUserDataT(obj: UserNotNull, db?: string): void {
  console.log(obj.parents!.father?.toLowerCase(), db?.toLowerCase());
}
