// let num = new Number(5);
// let num2: number = 4;
// let num3 = Number(5); // -> no error

// num = num2; // ->  no error
// num2 = num; // -> error new constructor obj

const num = 5;
const strNum: string = num.toString();
const strN = "5";
const numStr: number = +strN;

interface Department {
  name: string;
  budget: number;
}

const department: Department = {
  name: "web-dev",
  budget: 40000,
};

interface Project {
  name: string;
  projectBudget: number;
}

// const mainProject: Project = {
//   ...department,
//   projectBudget: 5000,
// };

function transformDepartment(department: Department, amount: number): Project {
  return {
    name: department.name,
    projectBudget: amount,
  };
}

const mainProject: Project = transformDepartment(department, 40000);
console.log(mainProject);
