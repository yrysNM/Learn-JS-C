const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    return arr.filter(o => o.rating >= 8);
}

function showListOfFilms(arr) {
    let str = "";
    return arr.reduce((o, list) => {
        return (typeof (o) === "object" ? o.name : o) + ", " + list.name;
    });

    return str;
}
console.log(
    showListOfFilms(films)
);

function setFilmsIds(arr) {

}

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {

}


const arr = [4, 5, 1, 4, 2, 6];
/**
 //          1) sum -> 0 current -> 4
 *           2) sum -> 4 current -> 5
 *           3) sum -> 9 current -> 1
 *           4) sum -> 10 current -> 3...
 */


const res = arr.reduce((sum, current) => {
    return sum + current;
})

console.log(res);


const arrStr = ["apple", "pear", "plum"];

// after utir it is first element
const res2 = arrStr.reduce((sum, current) => sum + ", " + current, 3);
console.log(res2);

