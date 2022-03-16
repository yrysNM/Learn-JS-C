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
}

module.exports = cards;