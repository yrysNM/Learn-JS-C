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
 * @param aggregate_array -  There are several aggregate operations you can perform on arrays. First, you can assign one array to another array:
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
 * @param split
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
 * @param ubshift -- the mutator function 
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
 *  @param 
 */

