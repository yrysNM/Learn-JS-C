const XMLHttpRequest = require("xhr2");
const List = require("./ADTListClass.js");


const names = new List();
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");

// names.front(); 
// console.log(names.getElement());        // => Clayton

// names.next();
// console.log(names.getElement());        // => Raymon



// names.next();
// names.next();
// names.prev();

// console.log(names.getElement());        // => Cynthia



// console.log(names.front(), names.currPos(), names.length(), names.next());
// for(names.front(); names.currPos() < names.length(); names.next()) {
//     console.log(names.getElement(), names.currPos());
// }

// for(names.end(); names.currPos() > 0; names.prev()) {
//     console.log(names.getElement(), names.currPos());
// }

/**
 * @param textFile
 */
 
const fs = require("fs"); 
const FILENAME = "data/films.txt";

function readTextFle(file) {
    let rawFile = new XMLHttpRequest(); 
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function() {
        if(rawFile.readyState === 4) {
            if(rawFile.status === 200 || rawFile.status == 0) {
                let allText = rawFile.responseText;
                alert(allText);
            }
        }
    };
    rawFile.send(); 
}

readTextFle(FILENAME);
// let date = fs.readFileSync(FILENAME);
// fs.readFile("./data/films.txt", (err, data) => {
//     if(err) {

//         console.log(err);
//     }
//     else {

//         console.log(data);
//     } 
    
// });