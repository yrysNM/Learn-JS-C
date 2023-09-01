const f = (a) => {
    const arr = [];
    arr.push(a);
    return (a2) => {
        arr.push(a2);
        return (a3) => {
            arr.push(a3);
            let res = 0;
            for (let i = 0; i < arr.length; i++) {
                res += arr[i];
            }
            // if (typeof this === "object") {

            // return (a4) => {
            //     arr.push(a4);
            //     let res = 0;
            //     for (let i = 0; i < arr.length; i++) {
            //         res += arr[i];

            //     }


            //     return res;
            //     // if(typeof this !== "object") {
            //     //     return (a5) => {
            //     //         arr.push(a5);
            //     //     }
            //     // }else {
            //     //     for(let i = 0; i < arr.length; i++) {
            //     //         res += arr[i];
            //     //     }
            //     //     return 
            //     // }
            //     // if (typeof this === "object") {
            //     //     return (a5) => {
            //     //         arr.push(a5);
            //     //         let res = 0;
            //     //         for (let i = 0; i < arr.length; i++) {
            //     //             res += arr[i];
            //     //         }
            //     //         // return res;
            //     //     }
            //     // } else {
            //     //     return res;
            //     // }

            // }
            // } else {
            return res;
            // }
        }
    }

}


console.log(f(2)(3)(4));

// console.log(f(-1)(2)(3)(4)(7));