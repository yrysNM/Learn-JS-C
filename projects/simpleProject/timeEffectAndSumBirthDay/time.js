let timer = document.body.querySelector(".timer");
let dayBirth = document.body.querySelector(".inputBirthDay");
let btnSubmit = document.body.querySelector(".btnSubmit");
let selector = document.body.querySelector(".timerBirth");

class Clock {
	constructor(options) {
		this._template = options.template;
	}

	_render() {
		let date = new Date();
		let day= date.getDay();
		let month = date.getMonth();
		let year = date.getFullYear();
		let hours = date.getHours();

		//check to zero 
		if(hours < 10) 
			hours = "0" + hours;

		let min = date.getMinutes();
		if(min < 10)
			min = "0" + min;

		let seconds = date.getSeconds();

		if(seconds < 10)
			seconds =  "0" + seconds;

		/* let output = this._template.replace("h", hours)
				.replace("m", min).replace("s", seconds); */	// replace -- change text 

		timer.innerHTML = `${hours}:${min}:${seconds}`;

		
	

	}

	input_render() {
		let date = new Date();
		let day= date.getDay();
		let month = date.getMonth();
		let year = date.getFullYear();

		let minDay;

		//check to zero 
		if(month < 10)
		 	month = "0" + (month+ 1);

		if(day < 10)
			day = "0" + (day - 1);

		//posot value
		minDay = `${year}-${month}-${day}`;
		
		console.log(minDay);

		dayBirth.setAttribute("min", minDay);
	}


	birthDay(day) {
		const t = Date.parse(day) - Date.parse(new Date()),
			days = Math.floor((t / (1000 * 60 * 60 * 24))),
			hours = Math.floor((t / (1000 * 60 * 60) % 24)),
			minutes = Math.floor((t / 1000 /60) % 60),
			seconds = Math.floor((t / 1000) % 60);


		return {
			"total": t,
			"days": days,
			"hours": hours,
			"minutes": minutes,
			"seconds": seconds
		};
	}


	setClock(selector, endTime) {
		let days = selector.querySelector(".days"),
			hours = selector.querySelector(".hours"),
			minutes = selector.querySelector(".minutes"),
			seconds = selector.querySelector(".seconds");


	

		//interval for start clock
		let timeInterval = setInterval(updateClock, 1000);


			let self = this;
			updateClock();
		function updateClock() {
			const t = self.birthDay(endTime);

				//check to zero 
				if(t.days < 10)
				 	t.days = "0" + (t.days);

				if(t.hours < 10)
					t.hours = "0" + (t.hours);

				if(t.minutes < 10)
					t.minutes = "0" + t.minutes; 

				if(t.seconds < 10)
					t.seconds = "0" + t.seconds;

			days.innerHTML = t.days + " :";
			hours.innerHTML = t.hours + " :";
			minutes.innerHTML = t.minutes + " :"; 
			seconds.innerHTML = t.seconds;
			

			if(t.total <= 0) {
				clearInterval(timeInterval);
			}
		}
	}

	updateClock() {
		this._render();
		timer.classList.add("animate");
		
	}

	stop() {
		clearInterval(this._timer);
		clearInterval(this._ani);
	}

	start() {
		this._render();
		//initlize methods self
		let self = this;

		this._ani = setInterval(function() {
			self.updateClock();
			timer.classList.remove("animate");			//animation 
		}, 500);

		this._timer = setInterval(function() {
			self.updateClock();
		}, 1000);
	}
}

let clock = new Clock({template: "h:m:s"});
clock.start();
clock.input_render();
let boolean = false;

if(boolean == false)  {

	
	btnSubmit.addEventListener("click",(e) => {
		
		if(!boolean)
			clock.setClock(selector, dayBirth.value);
		
		//boolean for only one  click
		boolean = true;
	});
}

		


