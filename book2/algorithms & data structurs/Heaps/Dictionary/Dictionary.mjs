import { defaultToString } from "./defaultToString.mjs";


class ValuePair {
	constructor(key, value) {
		this.key = key; 
		this.value = value;
	}

	toString() {
		return `[#${this.key}: ${this.value}]`;
	}
}


export default class Dictionary{
	constructor(toStrFn = defaultToString) {
		this.toStrFn = toStrFn;
		this.table = {}; 
	}

	hasKey(key) {
		return this.table[this.toStrFn(key)] != null;
	}

	set(key, value) {
		if(key != null && value != null) {
			const tableKey = this.toStrFn(key);
			this.table[tableKey] = new ValuePair(key, value);
			return true;
		}
		return false;
	}

	remove(key) {
		if(this.hasKey(key)) {
			delete this.table[this.toStrFn(key)];
			return true;
		}

		return false;
	}

	get(key) {
		// const valuePair = this.table[this.toStrFn(key)];
		// return valuePair == null ? undefined : valuePair.value;
		
		//different way
		if(this.hasKey(key)) {
			return this.table[this.toStrFn(key)];
		}

		return undefined;
	}

	keyValues() {
		return Object.values(this.table);
	}

	values() {
		return this.keyValues().map(valuePair => valuePair.value);
	}

	keys() {
		//return this.keyValues().map(valuePair => valuePair.key); 
		// or with array
		const keys = []; 
		const valuePairs =  this.keyValues();

		for(let i =0; i < valuePairs.length; i++) {
			keys.push(valuePairs[i].key);
		}

		return keys;

	}

	forEach(callBackFn) {
		const valuePairs = this.keyValues();
		for(let  i =0; i < valuePairs.length; i++) {
			const result = callBackFn(valuePairs[i].key, valuePairs[i].value);

			if(result === false) {
				break;
			}
		}
	}

	size() {
		return Object.keys(this.table).length; 
	}

	isEmpty() {
		return this.size() === 0;
	}

	clear() {
		this.table = {};
	}

	toString() {
		if(this.isEmpty()){
			return "";
		}

		const valuePairs= this.keyValues();
		let objString = `${valuePairs[0].toString()}`;

		for(let i = 1; i< valuePairs.length; i++) {
			objString = `${objString}, ${valuePairs[i].toString()}`;
		}

		return objString;
	}
}


//using the dictionary class
const dictionary = new Dictionary();
dictionary.set("John",  "hohnsnow@email.com");
dictionary.set("Tyrion",  "tyrion@email.com");
dictionary.set('Gandalf', 'gandalf@email.com');

console.log(dictionary.hasKey("Gandalf"));			// => true

console.log(dictionary.size());						// => 3

console.log(dictionary.keys());						// => 	[ 'John', 'Tyrion', 'Gandalf' ]
console.log(dictionary.values());					// => 	[ 'hohnsnow@email.com', 'tyrion@email.com', 'gandalf@email.com' ]
console.log(dictionary.get("Tyrion"));				// =>   ValuePair { key: 'Tyrion', value: 'tyrion@email.com' }

dictionary.remove("John");

console.log(dictionary.keys());						// =>  [ 'Tyrion', 'Gandalf' ]
console.log(dictionary.values());
console.log(dictionary.keyValues());

dictionary.forEach((k, v) => {
	console.log("forEach: ", `key: ${k}, value: ${v}`);	// =>
	/* forEach:  key: Tyrion, value: tyrion@email.com
		forEach:  key: Gandalf, value: gandalf@email.com */
});

