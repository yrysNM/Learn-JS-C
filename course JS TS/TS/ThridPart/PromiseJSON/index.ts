// const jsonTest = '{"name": "test"}';

// interface JSONTest {
//     name: string
// }

// const objFromjson: JSONTest = JSON.parse(jsonTest);

let toDoLists: ToDo[] = [];

interface ToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((r) => r.json())
//   .then((j) => {
//     if ("id" in j) {
//       toDoList.push(j);
//     }
//     console.log(toDoList);
//   });

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((r) => r.json())
  .then((j) => {
    if ("id" in j) {
      toDoLists.push(j);
    } else if (Array.isArray(j)) {
      toDoLists = j;
    } else {
      console.log(`${j} -> is a string`);
    }
    console.log(toDoLists);
  });

const Testpromise = new Promise<string>((resolve, reject) => {
  resolve("test");
});

Testpromise.then((v) => console.log(v.toLowerCase()));
