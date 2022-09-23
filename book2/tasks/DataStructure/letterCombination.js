function isEmpty(s) {
    return s.length == 0;
}

function letterCombinationUtil(number, n, table) {
    let list= []; 
    let q = [];
    q.push("");
    
    while(!isEmpty(q)) {
        let s = q.shift();      

        if(s.length == n) {
            list.push(s);
        }else {
            let val = table[number[s.length]];

            for(let i = 0; i < val.length; i++) {
                q.push(s + val.charAt(i));
            }
        }
    }
    return list;
}

function letterCombinations(number, n) {
    let table = ["0", "1", "abc", "def", "ghi", "jki", "mno", "pqrs", "tuv", "wxyz"];


    let list= letterCombinationUtil(number, n, table); 

    console.log(list);
}

letterCombinations([2, 3], 2);