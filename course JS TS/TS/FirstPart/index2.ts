const message: string | number = 5;

const messages: string[] | number[] = ["a", "v"]; // for combine need userDataTuple

// function printMsg(msg: string | number | boolean): void {
//   //    first variant
//   //   if (typeof msg === "string") {
//   //     console.log(msg.toLowerCase());
//   //   } else {
//   //     console.log(msg.toExponential());
//   //   }

//   if (typeof msg === "string" || typeof msg === "number") {
//     console.log(msg.toString());
//   } else {
//     console.log(msg.valueOf());
//   }

//   console.log(msg);
// }

function printMsg(msg: string[] | number | boolean): void {
  if (Array.isArray(msg)) {
    msg.forEach((m) => console.log(m));
  } else if (typeof msg === "number") {
    console.log(msg.toFixed());
  } else {
    console.log(msg.valueOf());
  }
}

printMsg(1);

const printReadings = (a: number | string, b: number | boolean): void => {
  if (a === b) {
    console.log(a, b);
  }
};

const printReadings2 = (a: number[] | string): void => {
  console.log(a.slice(0, 3));
};

// obj and class
const checkReadings = (
  readings:
    | {
        system: number;
      }
    | {
        user: number;
      }
): void => {
  if ("system" in readings) {
    console.log(readings.system);
  } else {
    console.log(readings.user);
  }
};

function logValue(x: string | Date): void {
  if (x instanceof Date) {
    console.log(x.toISOString());
  } else {
    console.log(x.replace("H", "Y"));
  }
}

checkReadings({ user: 1 });

logValue(new Date());

/**
 * Literal types
 */

let msg: "Hello" = "Hello";

msg = "Hello";

type Config = { protocol: "http" | "https"; port: 3000 | 3001 };

type Role = {
  role: string;
};

type ConfigWithRole = Config  Role;

const serverConfig: ConfigWithRole = {
  protocol: "https",
  port: 3001,
  role: "admin",
};

const backupConfig: ConfigWithRole = {
  protocol: "http",
  port: 3000,
  role: "sysadmin",
};

const port3000: number = 3000;
const port3001: number = 3001;

type startFunction = (protocal: "http" | "https", port: 3000 | 3001) => string;

const startServer: startFunction = (
  protocal: "http" | "https",
  port: 3000 | 3001
): "Server started" => {
  if (port === port3000 || port === port3001) {
    console.log(`Server started on ${protocal}://server:${port}`);
  } else {
    console.error("Wrong port");
  }

  return "Server started";
};

// startServer("http", 3001);
startServer(serverConfig.protocol, serverConfig.port);

// type aliases
type AnimationTimingFunk = "ease" | "ease-in" | "ease-out";
type AnimationId = string | number;

const createAnimation = (
  id: AnimationId,
  animationName: string,
  timingFunc: AnimationTimingFunk = "ease",
  duration: number,
  iterationCount: "infinite" | number
): void => {
  //   const elem = document.querySelector(`#${id}`) as HTMLElement;

  //   if (elem) {
  // elem.style.animation = `${animationName} ${timingFunc} ${duration} ${iterationCount}`;
  console.log(`${animationName} ${timingFunc} ${duration} ${iterationCount}`);
  //   }
};

createAnimation("id", "fade", "ease-out", 2, "infinite");
