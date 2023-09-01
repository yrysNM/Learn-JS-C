const XMLHttpRequest = require("xhr2");
const List = require("./ADTListClass.js");


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

// names.front(); 
// console.log(names.getElement());        // => Clayton

// names.next();
// console.log(names.getElement());        // => Raymon



// names.next();
// names.next();
// names.prev();

// console.log(names.getElement());        // => Cynthia



//  console.log(names.front(), names.currPos(), names.length(), names.next());
// for(names.front(); names.currPos() < names.length(); names.next()) {
//     console.log(names.getElement(), names.currPos());
// }


