function insertionSort2(n, arr) {
    // Write your code here
    for(let i =  1; i < arr.length; i++) {
        let key  = arr[i];
        let j = i - 1; 
        
        while(j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
   
         arr[j + 1] = key;
             console.log(arr.join(" "));     
    }
    
   // console.log(arr);
}

insertionSort2(5, [1, 4, 3, 8, 43, 23]);