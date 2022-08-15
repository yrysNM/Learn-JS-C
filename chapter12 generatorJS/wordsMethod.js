function  words(s) {
	var r = /\s+|$/g;						//Match one or more spaces or end

	r.lastIndex = s.match(/[^ ]/).index;    // Start matching at first nonspace

	return {								// Return an iterable iterator object
		[Symbol.iterator]() {				// this makes  us iterable
			return this;
		},

		next() {
			let start = r.lastIndex; 		// resume  where the last match ended 

			if(start < s.length) {			// if we're not done
				let match = r.exec(s);		// Match the next word boundary
			
				if(match) {					//  if we found one return the word
					return {value: s.substring(start, match.index) };
				}
			}	

			return {done: true}; 			// Otherwise say that we're done

		}
	};	
}


console.log([...words(" abc def ghi! ")]); // => ["abc", "def", "ghi!"]
