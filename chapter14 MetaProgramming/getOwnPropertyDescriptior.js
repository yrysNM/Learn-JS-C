//Returns {value: 1, writable: true, enumeerable: true, confiqurable: true}
Object.getOwnPropertyDescriptor({x: 1}, "x");

//Here is an object with a read-only accessor property
const random=  {
	get octet() {
		return Math.floor(Math.random() * 256);
	},
};

//Retuens {get: /* func */, set: undefined, enumerable: true, confiqurable: true}
console.log(Object.getOwnPropertyDescriptor(random, "octet"));

//Returns undefined for inherited properties and properties that don't exist. 
console.log(Object.getOwnPropertyDescriptor({}, "x"));			// => undefined; no such prop
console.log(Object.getOwnPropertyDescriptor({}, "toString"));	// => undefined; inheried


/* configurable
Значение true, если тип дескриптора этого свойства может быть изменён и если свойство может быть удалено из содержащего его объекта, иначе false.

enumerable
Значение true, если это свойство доступно при перечислении свойств содержащего его объекта, иначе false

writable
Значение true, если значение, ассоциированное со свойством, может быть изменено, иначе false (только в дескрипторе данных). */