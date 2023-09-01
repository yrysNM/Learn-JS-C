// Query String
// /([^?=&]+)(=([^&]*))

/* For example, for the URL http://your.domain/product.aspx?category=4& 
product_id=2140&query=lcd+tv, the URL might respond to a back-end SQL query like 
the following:
1 SELECT LCD, TV FROM database WHERE Category = 4 AND Product_id=2140; */

let url = 'http://your.domain/product.aspx?category=4&product_id=2140&query=lcd+tv';
let queryString ={};

url.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), function($0, $1, $2, $3) {
			queryString[$1] = $3;
});

console.log("ID: " + queryString['product_id']) 		// ID: 2140
console.log("Name: " + queryString["product_name"]);	// Name: undefined 
console.log("Category: " + queryString["category"]);	// Category: 4

// function urlGenerator(domain) {
// 	return function(url) {
// 		return `https://${url}.${domain}`;
// 	};
// }
// 
// const comUrl = urlGenerator('ru'); 
// 
// console.log(comUrl('aniu'));
