function commonChars(words: string[]): void {
    let popular = '';
    let seq = []
    let map = {}
  
    for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < words[i].length - length + 1; j++) {
        const str = words[i].slice(j, j+length)
        if (!map[str]) {
          map[str] = 1
        } else {
          map[str]++
        }
      }
    }
    // console.log(map)
    
    let maxv = 0;
    for(let prop in map) {
      if(map[prop] > maxv) {
        popular = prop;
        maxv = map[prop];
      }   
    }

    console.log(popular); 
    // return popular
};

commonChars(["bella","label","roller"])