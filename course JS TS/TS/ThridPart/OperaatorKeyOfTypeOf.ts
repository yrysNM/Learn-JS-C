interface ICompany {
  name: string;
  debts: number;
}

type CompanyKeys = keyof ICompany;

const keys: CompanyKeys = "name";

const printDebts = <T, K extends keyof T, S extends keyof T>(
  company: T,
  name: K,
  debts: S
) => {
  console.log(`Company ${company[name]}, debts: ${company[debts]}`);
};

const hh: ICompany = {
  name: "HH",
  debts: 5000,
};

printDebts(hh, "name", "debts");

const google = {
  name: "google",
  open: "true",
};

printDebts(google, "name", "open");

function printMsg(msg: string[] | number | boolean): void {
  if (Array.isArray(msg)) {
    msg.forEach((m) => console.log(m));
  } else if (typeof msg === "string") {
    console.log(msg);
  } else {
    console.log(msg);
  }

  console.log(msg);
}

const dataFromControl = {
  water: 200,
  el: 20,
};

const checkReadings = (data: typeof dataFromControl): boolean => {
  const dataFromuser = {
    water: 200,
    el: 20,
  };

  if (data.el === dataFromControl.el && data.water === dataFromControl.water) {
    return true;
  } else {
    return false;
  }
};

type GoogleKeys = keyof typeof google;
const key3: GoogleKeys = "name";
