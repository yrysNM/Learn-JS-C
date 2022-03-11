window.addEventListener("DOMContentLoaded", () => {				// loaded dom first
	//Tabs method	
	let tabs = document.querySelectorAll(".tabheader__item"),
		tabsContent = document.querySelectorAll(".tabcontent"), 
		tabsParent = document.querySelector(".tabheader__items");

	function hideContent() {
		tabsContent.forEach(item => {
			item.classList.add("hide");
			item.classList.remove("show", "fade");
		});

		tabs.forEach(item => {
			item.classList.remove("tabheader__item_active");
		});
	}

	function showTabContent(i = 0) {
		tabsContent[i].classList.add("show", "fade");
		tabsContent[i].classList.remove("hide");
		tabs[i].classList.add("tabheader__item_active");
	}

	hideContent();
	showTabContent(); 

	tabsParent.addEventListener("click", function(e) {
		const target = e.target; 

		if(target && target.classList.contains("tabheader__item")) {
			tabs.forEach((item,  i) => {
				if(target == item) {
					hideContent();

					showTabContent(i);
				}
			});
		}
	});


	//Timer method or feedback report
	const deadline = "2022-12-31";

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

	setClock('.timer', deadline);



	//Modal Window 
	const modalTrigger = document.querySelectorAll("[data-modal]"),
			modal = document.querySelector(".modal"); 

	function openModal() {
		modal.classList.add("show");
		modal.classList.remove("hide");

		document.body.style.overflow = "hidden";
		//clearInterval(modalTimerId);
	}

	modalTrigger.forEach(btn => {
		btn.addEventListener("click", openModal);
	});

	function closeModal() {
		modal.classList.add("hide");
		modal.classList.remove("show");
		modal.classList.toggle("show");

		document.body.style.overflow = ""; 

	}

	modal.addEventListener("click",  (e) => {
		let target = e.target;

		if(target == modal || target.getAttribute("data-close") == "") {
			closeModal();
		}
	});

	document. addEventListener("keydown", (e) => {
		let keyCode = e.code;

		if(keyCode === "Escape" && modal.classList.contains("show")) {
			closeModal();
		}
	});

//	const modalTimerId = setTimeout(openModal, 5000);

	function showModalByScroll() {
		if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
			//openModal(); 
			window.removeEventListener("scroll",  showModalByScroll);
		}
	}

	window.addEventListener('scroll', showModalByScroll);



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

	const getResouse = async(url, data) => {
		const res = await fetch(url);

		if(!res.ok) {
			throw new Error(`Could nor fetch ${url}, status: ${res.status}`);
		}

		return await res.json();
	};

	getResouse("http://localhost:3000/menu").then(data => {
		console.log(data);
		data.forEach(({img, altimg, title, descr, price}) => {
			new  MenuCard(img, altimg, title, descr, price, '.menu .container').render();
		});
	});

	
	//get data from FORMS
	const forms  = document.querySelectorAll("form");

	const message = {
		"loading": "img/form/spinner.svg",
		"success": "Thank you we will contact you!",
		"failure": "Something wrong... :( "
	};

    forms.forEach(item => {
        bindpostData(item);
    });

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

            postData("http://localhost:3000/requests", json)
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
		openModal();

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
			closeModal();
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


	//Slider
	const slides = document.querySelectorAll(".offer__slide"), 
			slider = document.querySelector(".offer__slider"),
			prev = document. querySelector(".offer__slider-prev"),
			next = document.querySelector(".offer__slider-next"),
			total = document.querySelector("#total"),
			slidesWrapper = document.querySelector(".offer__slider-wrapper"),
			slidesField = document.querySelector(".offer__slider-inner"),
			width = window.getComputedStyle(slidesWrapper).width,
			current = document.querySelector("#current");


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
		if(offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
			offset = 0;
		}else {
			offset += +width.slice(0, width.length - 2);
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
			offset = +width.slice(0, width.length - 2) * (slides.length - 1);

		}else {
			offset -= +width.slice(0, width.length - 2);
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
			offset = +width.slice(0, width.length - 2) * (slideTo - 1);

			slidesField.style.transform = `translateX(-${offset}px)`;

			showSlideCurrent(slides.length, slideIndex);
			changeViewDots(dots, slideIndex);
			
		});
	});

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

});