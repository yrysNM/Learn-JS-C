function modal() {

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

}

module.exports = modal;