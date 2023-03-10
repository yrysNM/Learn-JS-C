var fetchDataTypeAssertion = function (url, method) {
    console.log(method);
    console.log("Fetched!");
};
// const reqOptions = {
//   url: "https://someurl.com",
//   method: "GET" as "GET",
// } as const;
var reqOptions = {
    url: "https://someUrl.com",
    method: "GET"
};
var str = "str";
var method = "method";
fetchDataTypeAssertion("qqq", "GET");
// fetchDataTypeAssertion(reqOptions.url, reqOptions.method as "GET");
// fetchDataTypeAssertion(reqOptions.url, reqOptions.method);
fetchDataTypeAssertion(reqOptions.url, reqOptions.method);
var box = document.querySelector(".box");
// box.style.cssText = `
// border: 1px solid red;
// width: 100px;
// height: 100px;`;
// box?.classList.add("test");
var input = document.querySelector("input");
// const someNumber: number = input.value as any as number;
var someNumber = +input.value;
console.log(someNumber * 2);
console.log(someNumber.toFixed());
