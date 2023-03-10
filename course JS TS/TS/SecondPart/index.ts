// type
// type Config = { protocol: "http" | "https"; port: 3000 | 3001 };

//  type Role = { role: string; }
// intersection type ConfigWithRole = Config & Role !!

interface ConfigInterface {
  protocol: "http" | "https";
  port: 3000 | 3001;
  log: (msg: string) => void;
}

interface RoleInterface {
  role: string;
}

interface ConfigWithRoleINterface extends ConfigInterface, RoleInterface {}

const serverConfig: ConfigWithRoleINterface = {
  protocol: "https",
  port: 3001,
  role: "admin",
  log: (msg): void => console.log(msg),
};

type StartFunction = (
  protocol: "http" | "https",
  port: 3000 | 3001,
  log: (msg: string) => void
) => string;

const startServer: StartFunction = (
  protocol: "http" | "https",
  port: 3000 | 3001,
  log: (msg: string) => void
): "Server started" => {
  log(`Server started on ${protocol}://server:${port}`);
  return "Server started";
};

startServer(serverConfig.protocol, serverConfig.port, serverConfig.log);

interface Styles {
  [key: string]: string;
}

const styles: Styles = {
  position: "absolute",
  top: "20px",
  left: "50px",
};

const salary: number = 5000;

interface UserData {
  isBirthdayData: boolean;
  ageData: number;
  userNameData: string;
}

const userData = '{"isBirthdayData":true,"ageData":19,"userNameData":"Yrys"}';
const userDataTest = {
  isBirthdayData: true,
  ageData: 19,
  userNameData: "Yrys",
};

const arr = ["sss", 4];

const userObj: UserData = JSON.parse(userData);

// console.log(userObj.smt); // -> error

const isOk = true;
let movement: boolean | string = false;

if (isOk) {
  movement = "moving";
}
