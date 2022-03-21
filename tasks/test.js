function test() {
    console.log(this.prop);
}

var prop = 0; 
test();

const a = {test, prop: 10};
a.test();
const test2 = test.bind({prop: 100});
test2();

const test3 = test2.bind({prop: 1000});
test3();