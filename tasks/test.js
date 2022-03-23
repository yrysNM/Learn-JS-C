// function test() {
//     console.log(this.prop);
// }
// 
// var prop = 0; 
// test();
// 
// const a = {test, prop: 10};
// a.test();
// const test2 = test.bind({prop: 100});
// test2();
// 
// const test3 = test2.bind({prop: 1000});
// test3();


function myFunc() {
    return this.age; 
}


const myFunc2 = () => this.age;

class MyClass {
    constructor(age) {
        this.age = age; 
    }

    getAge = myFunc();
    getAge2 = myFunc2();
}


let m = new MyClass(25);
console.log(m.getAge);
console.log(m.getAge2);