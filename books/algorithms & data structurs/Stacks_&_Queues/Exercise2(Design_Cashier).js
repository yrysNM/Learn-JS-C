function Queue(array) {
	this.array = [];
	if(array)
		this.array = array;
}

Queue.prototype.getBuffer = function() {
	return this.array.slice();
}

Queue.prototype.isEmpty = function(){
	return this.array.length == 0;
}


Queue.prototype.enqueue = function(value) {

	return this.array.push(value);
}

Queue.prototype.dequeue = function() {
	return this.array.shift();
}

function Customer(name, order) {
	this.name = name; 
	this.order = order;
}

function Cashier() {
	this.customers = new Queue();
}

Cashier.prototype.addOrder = function(customer) {
	this.customers.enqueue(customer);
}

Cashier.prototype.deliverOrder= function(){
	let finshedCustomer = this.customers.dequeue();

	console.log(finshedCustomer.name + ", you " + finshedCustomer.order + 
				" is ready!");

}

let cashier = new Cashier();
let customer1= new Customer("Jim", "Fries");
let customer2 = new Customer("Samme", "Burger");
let customer3 = new Customer("Peter", "Drink ");

cashier.addOrder(customer1);
cashier.addOrder(customer2);
cashier.addOrder(customer3);

cashier.deliverOrder();				// => Jim, you Fries is ready!
cashier.deliverOrder();				// => Samme, you Burger is ready!