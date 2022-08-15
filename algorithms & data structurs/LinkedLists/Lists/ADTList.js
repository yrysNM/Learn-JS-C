const fs = require("fs");
const List = require("./ADTListClass.js");
const Customer = require("./Customer");

const names = new List();
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");

const FILENAME = "./data/films.txt";
for(names.end(); names.currPos() > 0; names.prev()) {
    console.log(names.getElement(), names.currPos());
}

names.front(); 
console.log(names.getElement());        // => Clayton

names.next();
console.log(names.getElement());        // => Raymon



names.next();
names.next();
names.prev();

console.log(names.getElement());        // => Cynthia



for(names.front(); names.currPos() < names.length(); names.next()) {
    console.log(names.getElement(), names.currPos());
}

function read(fileName) {
    fs.readFile(fileName, (err, data) => {
        if(err) {
            console.log(err);
        }else {
            return data.toString();
        }
    });
}

let movies = read("./data/films.txt").split("\n"); 
let movieList = new List(); 
let customer = new List();


for(let i =0; i < movieList.length; i++) {
    movieList.append(movies[i]);
}

// function checkOut(name, movie)k

function createArr(file) {
    let arr = read("./data/films.txt").split("\n");
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].trim();
    }
    return arr;
}


function displayList(list) {
    for(list.front(); list.currPos() < list.length(); list.next()) {
        if(list.getElement() instanceof Customer) {
            console.log(list.getElement().name + "," + 
                            list.getElement().movie);
        }else {
            console.log(list.getElement());
        }
    }
}
