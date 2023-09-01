let o = {
	x: 1
}; // o has own property x and inherites property toString

console.log(delete o.x); /// => true deletes property x
console.log(delete o.x); // => true does nothing (x doesmt exist) but true anyway

console.log(delete o.toString); // => tru does nothing (toString isn;t an own property)
console.log(delete 1); // => true nonsense but true anyway

//In strick mode all these deletions throw TypeError instead of returing false
console.log(delete Object.prototype); // => false property is non-configurable

var x = 1;  //Declare a global variable 
console.log(delete x); // => false can;t delete this property 

function f() {}; //declare a global  function
console.log(delete f); // => false can;t delete  this property either