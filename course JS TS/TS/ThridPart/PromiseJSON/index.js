// const jsonTest = '{"name": "test"}';
// interface JSONTest {
//     name: string
// }
// const objFromjson: JSONTest = JSON.parse(jsonTest);
var toDoLists = [];
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((r) => r.json())
//   .then((j) => {
//     if ("id" in j) {
//       toDoList.push(j);
//     }
//     console.log(toDoList);
//   });
fetch("https://jsonplaceholder.typicode.com/todos")
    .then(function (r) { return r.json(); })
    .then(function (j) {
    if ("id" in j) {
        toDoLists.push(j);
    }
    else if (Array.isArray(j)) {
        toDoLists = j;
    }
    else {
        console.log("".concat(j, " -> is a string"));
    }
    console.log(toDoLists);
});
var promises = new Promise(function (resolve, reject) {
    resolve("test");
});
promises.then(function (v) { return console.log(v.toLowerCase()); });
