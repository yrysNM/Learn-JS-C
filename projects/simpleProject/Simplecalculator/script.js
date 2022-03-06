
let nums = [],
	res = 0,
	count = 0;

const firNum1 = () => {
	//return new  Promise((resolve, reject) => {
		let inputRes = document.querySelector("input[name = result]"),
			btns = document.querySelectorAll("button");

	
		btns.forEach(item => {
			item.addEventListener("click", () => {

				// check for symvol and numbers with !isNaN(numbers) == false!
				if(!isNaN(item.innerHTML)) {
					
						inputRes.value += item.innerHTML;
						//Promise for array get every element than check  
						Promise.resolve(nums.push(inputRes.value));

						//not be again equal one enouch (recursion) 
						if(nums[nums.length - 1].includes("=")) {

							inputRes.value = "";
							

						}
					
				//check for symbols ...
				}else if(isNaN(item.innerHTML) && item.innerHTML !== "✖" && item.innerHTML !== "=") {

					inputRes.value += " " + item.innerHTML + " ";
					//etc
					Promise.resolve(nums.push(inputRes.value));


						if(nums[nums.length - 1].includes("=")) {
						
							inputRes.value = "";
							
						}
				// get sum or result
				}else if(item.innerHTML === "=") {

					// receive number1 and number2
					let index1 = nums[nums.length - 1].indexOf(" ", 0);								//search index number1
					let index2 = nums[nums.length - 1].indexOf(" ", index1 + 2);					//search index number2
					let num1 = nums[nums.length - 1].slice(0, index1);								
					let num2 = nums[nums.length - 1].slice(index2, nums[nums.length - 1].length);

					let symbol = nums[nums.length - 1].charAt(index1 + 1);							// symbol for sum
					
					//logical operation
					if(symbol === "+") {
						res = Number(num1) + Number(num2);
					
						inputRes.value += " = " + res;
					}else if(symbol === "-") {

						res = Number(num1) - Number(num2);
					
						inputRes.value += " = " + res;

					}else if(symbol === "*") {

						res= Number(num1) * Number(num2);
					
						inputRes.value += " = " + res;

					}else if(symbol === "/") {

						res = Number(num1) / Number(num2);
					
						inputRes.value += " = " + res;

					}
					
				//delete element 
				}else if(item.innerHTML === "✖") {
				
					count++;
					
					let newval = nums[nums.length - 1].slice(0, nums[nums.length - 1].length - count);
					inputRes.value = newval;
					
					Promise.resolve(nums.push(nums[nums.length - 1].slice(0, nums[nums.length - 1].length - count)));
					
					//console.log(nums[nums.length - 1].slice(0, nums[nums.length - 1].length - count));
				}
			});
		});
	//});
};



const q = firNum1();
console.log(nums);
