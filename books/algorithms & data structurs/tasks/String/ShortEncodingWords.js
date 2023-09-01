function minimumLengthENcoding(words) {
    let st = new Set(words);

    for(let str of words) {
        for(let j = 1; j < str.length; j++) {
            st.delete(str.substring(j));
        }

    }

    let res= 0; 
    let newSt = Array.from(st);
    for(let str of newSt) {
        console.log(str);
        res += str.length + 1;
    }

    return res;
}

const arr = ["time","me"]; 
console.log(minimumLengthENcoding(arr));



