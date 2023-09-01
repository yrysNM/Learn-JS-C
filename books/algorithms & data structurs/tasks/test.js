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


// function myFunc() {
//     return this.age; 
// }
// 
// 
// const myFunc2 = () => this.age;
// 
// class MyClass {
//     constructor(age) {
//         this.age = age; 
//     }
// 
//     getAge = myFunc();
//     getAge2 = myFunc2();
// }
// 
// 
// let m = new MyClass(25);
// console.log(m.getAge);
// console.log(m.getAge2);

function strSplitOnLength(data, your_desired_width) {
    if(data.length <= 0)
        return [];  // return an empty array

    var splitData = data.split(/([\s\n\r]+)/);
    var arr = [];
    var cnt = 0;
    for (var i = 0; i < splitData.length; ++i) {
        if (!arr[cnt]) arr[cnt] = '';  //Instantiate array entry to empty string if null or undefined

        if (your_desired_width < (splitData[i].length + arr[cnt].length))
            cnt++;

        arr[cnt] += splitData[i];
    }

    return arr;
}

console.log(strSplitOnLength('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada, est ut interdum ullamcorper, metus lorem interdum ipsum, vitae vulputate ante quam ut augue. Praesent sit amet varius lorem. Aliquam odio nunc, mattis in mollis vitae, laoreet non velit. Curabitur adipiscing, nisl tincidunt consequat ornare, ligula mauris sed.', 140));