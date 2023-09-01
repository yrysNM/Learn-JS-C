// console.log(1);
// 
// setTimeout(() => {
// 	console.log('timeout__2000');
// },  2000);	
// 
// setTimeout(() => {
// 	console.log("timeout_4000");
// }, 4000);
// 
// console.log(2);

/* 
1
2
timeout__2000
timeout_4000 
*/



 
setTimeout(() => {
	console.log(1);
}, 0);

console.log(2);
/* output
	2
    1 
 */