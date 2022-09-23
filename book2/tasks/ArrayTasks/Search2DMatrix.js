/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let checkArr = [];
    while(matrix.length) {
        let temp = matrix.shift();
        //let tuple = temp.pop();
        checkArr.push(search(temp, target));
        
    }

    let bool = checkArr.filter(val => {
        return val == true;
    });

    return bool[0] == true ? true : false;
};

function search(arr, target) {
    while(arr.length) {
        let temp = arr.shift(); 

        if(temp == target) {
            return true;
        }
    }

    return false;
}

let  matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3;

console.log(searchMatrix(matrix, target));