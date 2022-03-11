
let checkBox = document.querySelector("#checkbox");
let form = document.querySelector("form"),
	change = document.querySelector("#color");


if(window.localStorage.getItem("isChecked")) {
	checkbox.checked = true;
}

if(window.localStorage.getItem("bg") === "changed") {
	form.style.backgroundColor = "yellow";
}


checkBox.addEventListener("change", () => {
	window.localStorage.setItem("isChecked", true);
});	

change.addEventListener("click", () =>{
	if(window.localStorage.getItem("bg") === "changed") {
		window.localStorage.removeItem("bg");
		form.style.backgroundColor = "white";
	}else{
		window.localStorage.setItem("bg", "changed");
		form.style.backgroundColor = "yellow";
	}
});

const persone ={
	name: "User", 
	age: 23
};

const serializedPerson = JSON.stringify(persone);
localStorage.setItem("user", serializedPerson);

console.log(JSON.parse(localStorage.getItem("user")));

// methods localStorage
/* window.localStorage.setItem("number", 5);

//window.localStorage.removeItem("number");

//clear all data
window.localStorage.clear();

console.log(window.localStorage.getItem("number")); */