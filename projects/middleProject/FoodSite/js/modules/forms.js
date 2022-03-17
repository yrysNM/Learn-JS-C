import {openModal, closeModal} from "./modal";
import postData from "../services/services";


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
		openModal('.modal', modalTimerId);

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
			closeModal('.modal');
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

export default forms;