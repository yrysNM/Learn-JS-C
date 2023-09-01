//This calss extens Map so that the  get() method  returns the specified
class DefaultMap extends Map {
	constructor(defaultValue) {
		super(); //Invoke supercalsee constructor
		this.defaultValue = defaultValue; //Remember th e default valuei

	}

	get(key) {
		if(this.has(key)) { // id the key is already in the map
			return super.get(key);  // return its value from superclass

		}else {
			return this.defaultValue;
		}
	}
}

//this class computes and displays letter grequency histograms
class Histogram {
	constructor() {
		this.letterCounts = new DefaultMap(0); //Map from letters to counts
		this.totalletters = 0; //How many letters in all
	}

	//This function updates the histogram with the letters of text
	add(text) {
		//Remove whitespace from the text and convert to uppercase
		text = text.replace(/\s/g, "").toUppercase();

		//characters
		for(let character of text) {
			let count = this.letterCounts.get(character); // get old count

			this.letterCounts.set(character, count + 1); //Increment it
			this.totalletters++;
		}
	}

	toString() {
		//COnvert the map to an  array that displays an ACSII graphic
		let entries = [...this.letterCounts];

		entries.sort((a, b) => {
			if(a[1] === b[1]) {
				return a[0] < b[0] ? -1 : 1; 
			}else {
				return b[1] - a[1];
			}
		});

		//Convert the count  to percentages
		for(let entry  of entries){
			entry[1] = entry[1] / this.totalletters * 100;
		}

		//Drop any entres less than 1%
		entries = entries.filter(entry => entry[1] >= 1);

		//now convert each entry to a line of text
		let lines = entries.map(
		([l, n]) => `${l}: ${"#".repeat(Map.round(n))} ${n.toFixed(2)}%`
		);

		return lines.join("\n");

	}
}

		/* This async (Promise-returning) function creates a Histogram
		object,
		asynchronously reads chunks of text from standard input, and
		adds those chunks to
		the histogram. When it reaches the end of the stream, it
		returns this histogram */

		async function histogramFromStdin() {
			process.stdin.setEncoding("utf-8"); //Read unicode string,  not bytes

			let histogram = new Histogram();

			for await(let chunk of process.stdin) {
				histogram.add(chunk);
			}

			return histogram;
		}


// This one final line of code is the main body of the program.
// It makes a Histogram object from standard input, then prints
//the histogram.
histogramFromStdin().then(histogram => {
console.log(histogram.toString()); });