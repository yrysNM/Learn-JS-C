/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");


function cards(){

	// class for card it means created card with class  
	
	class MenuCard {
		constructor(src, alt, title, descer, price, parentSelector, ...classes) {
			this.src = src; 
			this.alt = alt; 
			this.title = title;
			this. descer = descer; 
			this. price = price; 
			this.parent = document.querySelector(parentSelector);
			this.classes = classes;
			this.transfer = 27; 
			this.changeToUAH();
		}

		changeToUAH() {
			this.price = this.price * this.transfer; 

		}

		render() {
			const element = document.createElement("div");

			if(this.classes.length === 0) {
				this.element = "menu__item";
				element.classList.add(this.element);


			}else {
				this.classes.forEach(className => element.classList.add(className));
			}

			element.innerHTML = `
				<img src= ${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descer}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> тнг/день</div>
                </div>
			`;

			this.parent.append(element);
		}
	}


	(0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getResource)("http://localhost:3000/menu").then(data => {
		console.log(data);
		data.forEach(({img, altimg, title, descr, price}) => {
			new  MenuCard(img, altimg, title, descr, price, '.menu .container').render();
		});
	});
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards); 

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");




function forms(formSelector ,modalTimerId) {

	//get data from FORMS
	
	const forms  = document.querySelectorAll(formSelector);

	const message = {
		"loading": "img/form/spinner.svg",
		"success": "Thank you we will contact you!",
		"failure": "Something wrong... :( "
	};

    forms.forEach(item => {
        bindpostData(item);
    });



    function bindpostData(form) {
        form.addEventListener("submit", (e) =>{
            e.preventDefault();

            const statusMessage = document.createElement("img");
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            //form.append(statusMessage);
            form.insertAdjacentElement("afterend", statusMessage);
            
          

            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            (0,_services_services__WEBPACK_IMPORTED_MODULE_1__["default"])("http://localhost:3000/requests", json)
            .then(data => {
                    console.log(data);
                    showThanksModle(message.success);
                    statusMessage.remove();
            }).catch(() => {
                showThanksModle(message.failure);
            }).finally(() => {
                form.reset();
            });
        });
    }

	function showThanksModle(message) {
		const prevModelDialog = document.querySelector(".modal__dialog");

		prevModelDialog.classList.add("hide");
		(0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)('.modal', modalTimerId);

		const thanksModal = document.createElement("div");
		thanksModal.classList.add("modal__dialog");
		thanksModal.innerHTML = `
			<div class = "modal__content">
                <div class ="modal__close" data-close>×</div>
                <div  class = "modal__title">${message}</div>
            </div>

		`;

		document.querySelector(".modal").appendChild(thanksModal);

		setTimeout(() => {
			thanksModal.remove(); 
			prevModelDialog.classList.add("add");
			prevModelDialog.classList.remove("hide");
			(0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)('.modal');
		}, 4000);

		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: "POST",
			body: JSON.stringify({name:  "Alex"}),
			headers: {
				"Content-type": "application/json",
			}
		}).then(response => response.json())
		  .then(json => console.log(json));
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "openModal": () => (/* binding */ openModal)
/* harmony export */ });

function closeModal(modalSelector) {
	const modal = document.querySelector(modalSelector); 
	modal.classList.add("hide");
	modal.classList.remove("show");
	//modal.classList.toggle("show");

	document.body.style.overflow = ""; 

}

function openModal(modalSelector, modalTimerId) {
	const  modal = document.querySelector(modalSelector); 
	modal.classList.add("show");
	modal.classList.remove("hide");

	document.body.style.overflow = "hidden";

	console.log(modalTimerId);
	if(modalTimerId) {

		clearInterval(modalTimerId);
	}
}

//modal
function modal(triggerSelector, modalSelector, modalTimerId) {

	//Modal Window 
	const modalTrigger = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector); 


	modalTrigger.forEach(btn => {
		btn.addEventListener("click", () => openModal(modalSelector, modalTimerId));
	});


	modal.addEventListener("click",  (e) => {
		let target = e.target;

		if(target == modal || target.getAttribute("data-close") == "") {
			closeModal(modalSelector);
		}
	});

	document. addEventListener("keydown", (e) => {
		let keyCode = e.code;

		if(keyCode === "Escape" && modal.classList.contains("show")) {
			closeModal(modalSelector);
		}
	});


	function showModalByScroll() {
		if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
			openModal(modalSelector, modalTimerId); 
			window.removeEventListener("scroll",  showModalByScroll);
		}
	}

	window.addEventListener('scroll', showModalByScroll);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal); 



/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider({container, slide, nextArrow, prevArrow, 
				totalCounter, currentCounter, wrapper, field}) {
	
	//Slider
	const slides = document.querySelectorAll(slide), 
			slider = document.querySelector(container),
			prev = document. querySelector(prevArrow),
			next = document.querySelector(nextArrow),
			total = document.querySelector(totalCounter),
			slidesWrapper = document.querySelector(wrapper),
			slidesField = document.querySelector(field),
			width = window.getComputedStyle(slidesWrapper).width,
			current = document.querySelector(currentCounter);


	let slideIndex = 1;
	let offset = 0;

	if(slides.length < 10) {
		total.textContent = `0${slides.length}`;
		current.textContent = `0${slideIndex}`;
	}else {
		total.textContent = slides.length;
		current.textContent = slideIndex;
	}



	//slide version 2 better
	slidesField.style.width = 100 * slides.length + "%";
	slidesField.style.display = "flex";
	slidesField.style.transition = "0.5s all";
	slidesWrapper.style.overflow = "hidden";



	slides.forEach(slide => {
		slide.style.width = width;
	});

	//create dots
	slider.style.position = "relative";

	const indicators = document.createElement("ol"),
			dots = [];


	indicators.classList.add("carousel-indicators");
	indicators.classList.cssText = `
		    position: absolute;
		    right: 0;
		    bottom: 0;
		    left: 0;
		    z-index: 15;
		    display: flex;
		    justify-content: center;
		    margin-right: 15%;
		    margin-left: 15%;
		    list-style: none;
	`;

	slider.append(indicators);


	for(let i = 0; i < slides.length; i++) {
		const dot = document.createElement("li");
		dot.setAttribute("data-slide-to", i + 1);
		dot.style.cssText = `	
		    box-sizing: content-box;
		    flex: 0 1 auto;
		    width: 30px;
		    height: 6px;
		    margin-right: 3px;
		    margin-left: 3px;
		    cursor: pointer;
		    background-color: #fff;
		    background-clip: padding-box;
		    border-top: 10px solid transparent;
		    border-bottom: 10px solid transparent;
		    opacity: .5;
		    transition: opacity .6s ease;

		`;
		if(i == 0) {
			dot.style.opacity = 1;
		}
			indicators.append(dot);

			dots.push(dot);
	
	}

	next.addEventListener("click", () => {
		if(offset == getWidthCurrent(width) * (slides.length - 1)) {
			offset = 0;
		}else {
			offset += getWidthCurrent(width);
		}




		slidesField.style.transform = `translateX(-${offset}px)`;

		if(slideIndex == slides.length) {
			slideIndex = 1;
		}else  {

			slideIndex += 1;
		}

		showSlideCurrent(slides.length, slideIndex);
		changeViewDots(dots, slideIndex);

	});


	prev.addEventListener("click", () => {
		if(offset == 0) {
			offset = getWidthCurrent(width) * (slides.length - 1);

		}else {
			offset -= getWidthCurrent(width);
		}




		slidesField.style.transform = `translateX(-${offset}px)`;

		if(slideIndex == 1) {
			slideIndex = slides.length;
		}else  {

			slideIndex -= 1;
		}

		showSlideCurrent(slides.length, slideIndex);
		changeViewDots(dots, slideIndex);

	});


	dots.forEach(dot => {
		dot.addEventListener("click", (e) => {
			const slideTo = e.target.getAttribute('data-slide-to');

			slideIndex = Number(slideTo);
			offset = getWidthCurrent(width) * (slideTo - 1);

			slidesField.style.transform = `translateX(-${offset}px)`;

			showSlideCurrent(slides.length, slideIndex);
			changeViewDots(dots, slideIndex);
			
		});
	});

	function getWidthCurrent(width){
		return +width.replace(/\D/g, "");
	}

	function changeViewDots(dots, slideIndex) {
		dots.forEach(dot => dot.style.opacity = ".5");

		dots[slideIndex - 1].style.opacity = 1;
	}

	function showSlideCurrent(n, slideIndex) {
		if(n < 10) {
			current.textContent = `0${slideIndex}`;
		}else {
			current.textContent = slideIndex;
		}
	}

	//slide version 1
	/* 

	showSlides(slideIndex);

	if(slides.length <  10) {
		total.textContent = `0${slides.length}`;
	}else {
		total.textContent = slides.length;
	}

	function showSlides(n) {
		
		if(n > slides.length) {					// check last element
			slideIndex = 1;
		}

		if(n < 1) {
			slideIndex = slides.length;			//check first element
		}

		slides.forEach(item => item.style.display = "none");

		slides[slideIndex - 1].style.display = "block";


		if(slides.length < 10) {
			current. textContent = `0${slideIndex}`;
		}else {
			current.textContent = slideIndex;
		}
	}


	function plusSlides(n) {
		showSlides(slideIndex += n);
	}


	prev.addEventListener("click", () =>  {
		plusSlides(-1);
	});

	next.addEventListener("click", () => {
		plusSlides(1);
	}); */

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeSelector) {

	//Tabs method	

	let tabs = document.querySelectorAll(tabsSelector),
		tabsContent = document.querySelectorAll(tabsContentSelector), 
		tabsParent = document.querySelector(tabsParentSelector);

	function hideContent() {
		tabsContent.forEach(item => {
			item.classList.add("hide");
			item.classList.remove("show", "fade");
		});

		tabs.forEach(item => {
			item.classList.remove(activeSelector);
		});
	}

	function showTabContent(i = 0) {
		tabsContent[i].classList.add("show", "fade");
		tabsContent[i].classList.remove("hide");
		tabs[i].classList.add(activeSelector);
	}

	hideContent();
	showTabContent(); 

	tabsParent.addEventListener("click", function(e) {
		const target = e.target; 

		if(target && target.classList.contains(tabsSelector.slice(1))) {
			tabs.forEach((item,  i) => {
				if(target == item) {
					hideContent();

					showTabContent(i);
				}
			});
		}
	});
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer(timerID, deadline) {

	//Timer method or feedback report

	let getTimeRemaining = (endtime) => {
		const t = Date.parse(endtime) - Date.parse(new Date()),
			  days = Math.floor((t / (1000 * 60 * 60 * 24))), 
			  hours = Math.floor((t / (1000 * 60 * 60) % 24)),
			  minutes = Math.floor((t / 1000 / 60) % 60),
			  seconds = Math.floor((t / 1000) % 60);

		return {
			"total": t, 
			 "days": days, 
			 "hours": hours,
			 "minutes": minutes,
			 "seconds": seconds
		};
	};


	const getZero = (num) => {
		if(num >= 0 && num <  10) {
			return `0${num}`;
		}

		return num;
	};

	const setClock = (selector, endTime) => {
		const timer = document.querySelector(selector),
			  days = timer.querySelector("#days"),
			  hours = timer.querySelector("#hours"),
			  minutes = timer.querySelector("#minutes"),
			  seconds = timer.querySelector("#seconds"), 
			  timeInterval = setInterval(updateClock, 1000);

		updateClock();

		function updateClock() {
			const t = getTimeRemaining(endTime);

			days.innerHTML = getZero(t.days);
			hours.innerHTML = getZero(t.hours); 
			minutes.innerHTML = getZero(t.minutes);
			seconds.innerHTML = getZero(t.seconds);

			if(t.total <= 0) {
				clearInterval(timeInterval);
			}
		}
	};

	setClock(timerID, deadline);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getResource": () => (/* binding */ getResource)
/* harmony export */ });
const postData = async (url, data) => {
    const res  = await fetch(url,  {
        method:  "POST",
        headers: {  
            "Content-type": "application/json"
        },
        body: data
    });

    return await res.json();
};

const getResource = async(url, data) => {
    const res = await fetch(url);

    if(!res.ok) {
        throw new Error(`Could nor fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");






 


	
window.addEventListener("DOMContentLoaded", () => {				// loaded dom first


	const modalTimerId = setTimeout(() => (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)(".modal", modalTimerId), 500000);


	(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])(".tabheader__item", ".tabcontent", ".tabheader__items", "tabheader__item_active");
	(0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])("[data-modal]", ".modal", modalTimerId); 
	(0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__["default"])(".timer", "2022-12-31"); 
	(0,_modules_cards__WEBPACK_IMPORTED_MODULE_3__["default"])();
	(0,_modules_calc__WEBPACK_IMPORTED_MODULE_4__["default"])(); 
	(0,_modules_forms__WEBPACK_IMPORTED_MODULE_5__["default"])("form", modalTimerId); 
	(0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__["default"])({
		container: ".offer__slider",
		nextArrow: ".offer__slider-next", 
		slide: ".offer__slide", 
		prevArrow: ".offer__slider-prev",
		totalCounter: "#total",
		wrapper: ".offer__slider-wrapper",
		field: ".offer__slider-inner", 
		currentCounter: "#current"
	});

});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map