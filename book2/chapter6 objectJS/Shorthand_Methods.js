const METHOD_NAME  = "m";
const symbol =  Symbol();

let weirdMethods = {
	"method with spaces"(x) {
		return x + 1;
	},
	[METHOD_NAME](x) {
		return x + 2;
	},
	[symbol](x) {
		return x + 3;
	}
};

console.log(weirdMethods["method with spaces"](1)); // => 2
console.log(weirdMethods[METHOD_NAME](1)); // => 3

console.log(weirdMethods[symbol](1));