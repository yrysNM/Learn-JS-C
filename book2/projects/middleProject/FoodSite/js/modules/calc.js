function calc() {	

	//Calculator colorie

	
	const result = document.querySelector(".calculating__result span"); 
	let sex, height, weight, age, ratio; 

	if(window.localStorage.getItem("sex")) {
		sex = window.localStorage.getItem("sex");
	}else {
		sex= "female"; 
		window.localStorage.setItem('sex', "female");
	}

	if(window.localStorage.getItem("ratio")) {
		ratio = window.localStorage.getItem("ratio");
	}else {
		ratio = 1.375; 
		window.localStorage.setItem('ratio', 1.375);
	}

	function calcTotal() {
		//console.log(sex, height, weight , age, ratio);
		if(!sex || !height || !weight || !age || !ratio) {
			result.textContent = "____";
			return;
		}

		if(sex === 'female') {
			result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);

		}else {
			result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.3 * age )) * ratio);
		}
	}

	calcTotal();

	function initialLocalSettings(selector, activeClass) {
		const elements = document.querySelectorAll(selector);

		elements.forEach(elem => {
			elem.classList.remove(activeClass);
			if(elem.getAttribute("id") === window.localStorage.getItem("sex")) {
				elem.classList.add(activeClass);
			}

			if(elem.getAttribute('data-ratio') === window.localStorage.getItem("ratio")) {
				elem.classList.add(activeClass);
			}
		});
	}

	initialLocalSettings("#gender div",  "calculating__choose-item_active");
	initialLocalSettings(".calculating__choose_big div", "calculating__choose-item_active");


	function getStaticInformation(parentSelector, activeClass) {
		const elements = document.querySelectorAll(`${parentSelector} div`);

		elements.forEach(elem => {
				elem.addEventListener("click", (e) =>  {
				if(e.target.getAttribute('data-ratio')) {
					ratio = +e.target.getAttribute('data-ratio');

					window.localStorage.setItem("ratio", +e.target.getAttribute('data-ratio'));

				}else{
					sex = e.target.getAttribute("id");

					window.localStorage.setItem("sex", e.target.getAttribute("id"));
				}

				//console.log(ratio, sex);

				elements.forEach(elem => {
					elem.classList.remove(activeClass);
				});

				e.target.classList.add(activeClass);

				calcTotal();
			});
		});	
	}

	getStaticInformation('#gender', "calculating__choose-item_active");
	getStaticInformation('.calculating__choose_big', "calculating__choose-item_active");

	function getDynamicInformation(selector) {
		const input = document.querySelector(selector);


		input.addEventListener("input", () => {
			
			if(input.value.match(/\D/g)) {
				input.style.border = "1px solid red";				// any text or maybe check show
			}else {
				input.style.border = "none";
			}


			switch(input.getAttribute('id')) {
				case "height": 
					height = +input.value;
					break;
				case "weight": 
					weight = +input.value; 
					break; 
				case "age":
					age = +input.value; 
					break;
			}

			calcTotal();
		});

	}


	getDynamicInformation("#height");
	getDynamicInformation("#weight"); 
	getDynamicInformation("#age");
}

export default calc;