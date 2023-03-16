interface ICompanyIn {
  name: string;
  debts: number;
  departments: Department[];
  management: {
    owner: string;
  };
}

interface Department {
  [key: string]: string;
}

// const debts = "debts"; // not let
// let debts = "debts" as "debts"; //first solution
let debts: "debts" = "debts";
type CompanyDebtsType = ICompanyIn[typeof debts];

// type CompanyDebtsType = ICompanyIn["debts"]; // type number
type CompanyOwnerType = ICompanyIn["management"]["owner"];
type CompantDepartmentsType = ICompanyIn["departments"]; // -> array

type Test = ICompanyIn[keyof ICompanyIn]; // -> uniont type
type CompantDepartmentsTypes = ICompanyIn["departments"][number]; // -> unique department

type CompanyKeysIn = keyof ICompanyIn;

const keysIn: CompanyKeysIn = "debts";

function printDebtsIn<T, K extends keyof T, S extends keyof T>(
  company: T,
  name: K,
  debts: S
) {
  console.log(`Compant ${company[name]}, debts: ${company[debts]}`);
}

const googleIn: ICompanyIn = {
  name: "google",
  debts: 500,
  departments: [
    {
      sales: "sales",
      developer: "dev",
    },
  ],
  management: {
    owner: "John",
  },
};

printDebtsIn(googleIn, "name", "debts");

type GoogleKeysIn = keyof typeof googleIn;
const key3In: GoogleKeysIn = "name";
