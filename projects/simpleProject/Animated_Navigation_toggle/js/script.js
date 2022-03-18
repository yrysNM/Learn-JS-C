let menuToggle = document.querySelector("#menu-toggle");
let activeElement = document.querySelectorAll(".active-element");

let toggledMenu= menuToggle.addEventListener("click", () => {
		activeElement.forEach(val => {
			val.classList.toggle("active");
		});
});