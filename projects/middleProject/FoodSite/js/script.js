window.addEventListener("DOMContentLoaded", () => {				// loaded dom first
	//Tabs method
	
	let tabs = document.querySelectorAll(".tabheader__item"),
		tabsContent = document.querySelectorAll(".tabscontent"), 
		tabsParent = document.querySelector(".tabheader__items");

	function hideContent() {
		tabsContent.forEach(item => {
			ite.classList.add(hide);
			item.classList.remove("show", "fade");
		});

		tabs.forEach(item => {
			item.classList.remove("tabheader_item_active");
		});
	}

});
