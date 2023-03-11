function printMsg(msg) {
    if (Array.isArray(msg)) {
        msg.forEach(function (m) { return console.log(m); });
    }
    else if (typeof msg === "number") {
        console.log(msg);
    }
    else {
        console.log(msg);
    }
    console.log(msg);
}
printMsg(4);
var boxEl = document.querySelector(".box");
boxEl === null || boxEl === void 0 ? void 0 : boxEl.addEventListener("click", function () { });
