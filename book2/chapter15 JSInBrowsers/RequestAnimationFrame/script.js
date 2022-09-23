const btn = document.querySelector(".btn");
const elem = document.querySelector(".box");
let timeId, i = 0;
let pos = 0; 

function myAnimation()
{
	pos++; 
	elem.style.top = pos + "px";
	elem.style.left = pos + "px";

	if(pos < 300) {
		requestAnimationFrame(myAnimation);
	}
}


btn.addEventListener("click", () => requestAnimationFrame(myAnimation));

// const timerId = setTimeout(logger, 2000);
// 
// function logger() {
// 	console.log("egegerae");
// }

// let logger = () => {
// 	console.log("egergrgEGfd");
// }