//.js if type module
import {one, two} from "./main.js"; 
import hello from "./main.js";

console.log(`${one} and ${two}`);
hello();

/* import {one as first, two, hello} from "./main";

console.log(`${first } and ${two}`); */

// import * as data from "./main.js";

/* console.log(`${data.one} and ${data.two}`);
data.hello(); */

