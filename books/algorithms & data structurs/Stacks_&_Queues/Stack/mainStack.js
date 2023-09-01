const Stack = require("./Stack");

let st = new Stack();

st.push("David");
st.push("Raymond");
st.push("Bryan");

console.log("length: " + st.length());
console.log(st.peek());
let popped = st.pop();
console.log("The popped element is: ", popped);
console.log(st.peek());
st.push("Cynthia");
console.log(st.peek());
st.clear();
console.log("Length ", st.length());
console.log(st.peek());
st.push("Clayton");
console.log(st.peek());

function mulBase(num, base) {
    let s = new Stack();
    let converted;
    do {
        st.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0);
    converted = "";
    while (s.length() > 0) {
        converted += st.pop();
    }

    return converted;
}

let num = 32,
    base = 2;
let newNum = mulBase(num, base);
console.log(num + " converted to base " + base + " is " + newNum);