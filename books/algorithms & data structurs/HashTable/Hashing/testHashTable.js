const { SimpleHash } = require("./simpleHash");

let someNames = ["David", "Jennifer", "Donnie", "Raymond",
    "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];

let hTable = new SimpleHash();
for (let i = 0; i < someNames.length; i++) {
    hTable.put(someNames[i]);
}

hTable.showDistro();