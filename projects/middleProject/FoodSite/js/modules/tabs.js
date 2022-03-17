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

export default tabs;