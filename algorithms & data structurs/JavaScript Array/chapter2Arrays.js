const readLine = require("readline");
/**
 * @param split array method
 */
// let sentence = "the quick brown fox jumped over the lazy dog.";
// const words = sentence.split(" ");
// for(let i =0; i < words.length; i++) {
// //    console.log("word " + i + ": " + words[i]);
// }

/***
 * @param aggregate_array -  There are several aggregate operations you can perform on arrays. 
 * First, you can assign one array to another array:
 *
*/
// let nums = []; 
// for(let i =0; i < 10; i++) {
//     nums[i] = i + 1;
// }


//shallow copy✔
// let samenums = nums; 
// nums[0] = 400; 
//console.log(samenums[0]);           // => 400

//deep copy✔
// function copy(arr1,  arr2) {
//     for(let i = 0; i < arr1.length; i++) {
//         arr2[i] = arr1[i];
//     }
// }

// let numsDeep = []; 
// for(let i =0; i < 100; i++) {
//     numsDeep[i] = i + 1;

// }

// let samenumsDeep= []; 
// copy(numsDeep,samenumsDeep); 
// numsDeep[0] = 400; 
//console.log(samenumsDeep[0]);       // => 1



/**
 * 
 * @param indexOf - searching for a value
 * 
 */
//let names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];
// const RL = readLine.createInterface(process.stdin, process.stdout);

// RL.question("Enter a name to search for: ", (name) => {
//     let position= names.indexOf(name);
//     if(position >= 0) {
//         console.log("Found " + name + " at position " + position);
    
//     }else  {
//         console.log(name + " not  found in array");
//     }
// }); 


/**
 * @param string representations of arrays
 */
// let namesStr = ["David", "Cynthia", "Raymond", "Clayton", "Mike", "jennifer"];
// let namestr = namesStr.join();
// console.log(namestr);
// namestr = namesStr.toString(); 
// console.log(namestr); 


/**
 * @param splice
 */
// let itDiv = ["Mike", "Clayton", "Terrill", "Raymond", "Cynthia", "Danny", "Jennifer"];
// let dmpDept = itDiv.splice(3, 3);
// let cisDept= itDiv; 
// console.log(dmpDept);
// console.log(cisDept);


/**
 * @param addValue with mutator function and without
 */
// let nums = [1, 2, 3, 4, 5]; 
// console.log(nums);
// nums.push(6); 
// console.log(nums);

// let numsWM= [1, 2,3, 4, 5];
// console.log(numsWM);
// numsWM[numsWM.length] = 6; 
// console.log(numsWM);


/**
 * @param unshift without the mutator function
 * 
 */
// let nums = [2, 3, 4, 5]; 
// let newnum = 1; 
// let N = nums.length; 
// for(let i = N;i>= 0; i--) {
//     nums[i] = nums[i - 1];
// }
// nums[0] = newnum; 
// console.log(nums);


/**
 * @param unshift -- the mutator function 
 */

// let nums = [2, 3, 4, 5]; 
// console.log(nums);
// let newnum  = 1; 
// nums.unshift(newnum);
// console.log(nums);
// nums = [3, 4, 5];
// nums.unshift(newnum, 1, 2);
//  console.log(nums);

/**
 *  @param pop_shift - removing elements from an array
 */

// let nums = [1,2,3,4,5,6,8];
// nums.pop(); 
// console.log(nums);

// let nums=[9,1,2,3,4,5,6];
// console.log(nums);
// for(let i = 0; i < nums.length;i++) {
//     nums[i] = nums[i + 1];
// }
// console.log(nums);


/**
 *  adding and removing eleemnts from thej middle of an array
 */

// let nums = [1,2,3,7,8,9]; 
// let newElements = [4,5,6];
// nums.splice(3,0, ...newElements);
// console.log(nums);

// let nums = [1,2,3,7,8,9];
// nums.splice(3,0,4,5,6);
// console.log(nums);

/**
 * @param iterator_functions-Non–Array-Generating Iterator Functions
 */

// function square(num) {
//     console.log(num, num * num);
// }

// let nums= [1,2,3,4,5,6,7,8,9,10];
// nums.forEach(square);

/** every() */
// function isEven(num) {
//     return num % 2 == 0; 
// }

// let nums = [2,4, 6,7,8, 10];
// let even = nums.every(isEven);
// if(even) {
//     console.log('all number are even');
// }else {
//     console.log("not all number are even"); 
// }

/** some() */
// function isEven(num) {
//     return num % 2 == 0;
// }

// let nums= [1,2,3,4,5,6,7,8,9,10];
// let someEven = nums.some(isEven);

// if(someEven) {
//     console.log("some number are even");
// }else {
//     console.log("no number are even");
// }
// nums = [1, 3, 5, 7, 9];
// someEven = nums.some(isEven);

// if(someEven) {
//     console.log("some number are even");
// }else {
//     console.log("no number are even");
// }

/** reduce() */
// function add(runningTotal, currentValue) {
//     return runningTotal + currentValue; 
// }

// let nums= [1,2,3,4,5,6,7,8,9,10];
// let sum = nums.reduce(add);
// console.log(sum);

// function concat(accumulatedString, item) {
//     return accumulatedString + item;
// }

// let words = ["the ", "quick ", "brown ", "fox "];
// // let sentence = words.reduce(concat);
// let sentence = words.reduceRight(concat);
// console.log(sentence);

/**
 * @param iterator_functions - Iterator Functions That Return a New Array
 *
 */

/** map() */
// function curve(grade) {
//     return grade += 5;
// }

// let grades = [77, 65,  81, 92, 83];
// let newgrades = grades.map(curve);
// console.log(newgrades);

// function first(word) {
//     return word[0];
// }

// let words = ['for ', "your", "information"]; 
// let acronym = words.map(first);
// console.log(acronym.join(""));

//** filter() */

// function isEven(num) {
//     return num % 2 == 0;
// }

// function isOdd(num) {
//     return num % 2 != 0;
// }

// let nums = []; 
// for(let i =0; i < 20; i++) {
//     nums[i] = i+1;
// }

// let evens = nums.filter(isEven);
// console.log("Even numbers: ");
// console.log(evens);

// let odds = nums.filter(isOdd);
// console.log("Odd numbers: ");
// console.log(odds);

// function passing(num) {
//     return num >= 60;
// }

// let  grades = []; 
// for(let i =0; i < 20; i++) {
//     grades[i] = Math.floor(Math.random() * 101);

// }

// let passGrades = grades.filter(passing);
// console.log("Allgrades: ");
// console.log(grades);
// console.log("Passing grades: ");
// console.log(passGrades);

// function afterc(str) {
//     if(str.indexOf("cie") > -1) {
//         return true;
//     }
//     return false;
// }

// let words = ["recieve", "decieve", "percieve", "deciet", "cencieve"];
// let misspelled = words.filter(afterc);
// console.log(misspelled);



/**
 * @param Two_Dimensional and Multidimensional Arrays 
 */

// let twod = []; 
// let rows = 5; 
// for(let i = 0; i <  rows; i++) {
//     twod[i] = [];
// }

// console.log(twod);  // => The problem with this approach is that each element of the array is set to undefined. 

// Array.matrix = function(numrows, numcols, initial) {
//     let arr = []; 
//     for(let i =0; i < numrows; i++) {
//         let columns = [];
//         for(let j = 0; j< numcols; j++) {
//             columns[j] = initial;
//         }
//         arr[i] = columns;
//     }
//     return arr;
// };

// let nums= Array.matrix(5, 5,0);
// console.log(nums[1][1]);    // => 1; 

// let grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]];
// let total = 0; 
// let average = 0.0; 
// for(let row = 0; row < grades.length; row++) {
//     for(let col = 0; col < grades[row].length; col++) {
//         total += grades[row][col];

//     }
//     average = total / grades[row].length;
//     console.log("Student " + parseInt(row + 1) + " average: " + average.toFixed(2));
//     total = 0; 
//     average = 0.0;
// }

// let grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]];
// let total = 0; 
// let average = 0.0; 
// for(let col= 0; col < grades.length; col++)  {
//     for(let row = 0; row < grades[col].length; row++) {
//         total += grades[row][col];
//     }

//     average = total / grades[col].length;
//     console.log("Test " + parseInt(col + 1) + " average: " + average.toFixed(2));
//     total = 0; 
//     average = 0.0;
// }

//jagged array
// let grades = [[89, 77], [76, 82, 81], [91, 94, 89, 99]];
// let total = 0; 
// let average = 0.0; 

// for(let row = 0; row < grades.length; row++) {
//     for(let col = 0; col <  grades[row].length; col++) {
//         total += grades[row][col];
//     }

//     average = total / grades[row].length;
//     console.log("Student " + parseInt(row + 1) + " average: " + average.toFixed(2));
//     total = 0;
//     average = 0.0;
// }

/**
 * @param Arrays_of_Objects
 *
 */

// function Point(x, y) {
//     this.x = x; 
//     this.y = y; 
// }

// function displayPts(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         console.log(arr[i].x + ", " + arr[i].y);
//     }
// }

// let p1 = new Point(1,2);
// let p2 = new Point(3,5);
// let p3 = new Point(2, 8);
// let p4= new Point(4, 4);
// let points = [p1, p2, p3, p4]; 
// for(let i = 0; i< points.length; i++) {
//     console.log("Point " + parseInt(i + 1) + ": " + points[i].x + ", " + points[i].y);
// }

// let p5= new Point(12, -3); 
// points.push(p5);
// console.log("After push: ");
// displayPts(points);
// points.shift();
// console.log("After shift: ");
// displayPts(points);


/**
 * @param Arrays_in_Objects
 */

function weekTemps() {
    this.dataStore = []; 
    this.add = add; 
    this.average = average; 
}

function add(temp) {
    this.dataStore.push(temp);
}

function average() {
    let total = 0;
    for(let i = 0; i < this.dataStore.length; i++) {
        total += this.dataStore[i];

    }
    return total / this.dataStore.length;
}

let thisWeek = new weekTemps(); 
thisWeek.add(52);
thisWeek.add(55);
thisWeek.add(61); 
thisWeek.add(65);
thisWeek.add(55);
thisWeek.add(50);
thisWeek.add(52);
thisWeek.add(49);
console.log(thisWeek.average());