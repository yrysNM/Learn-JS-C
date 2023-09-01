const teamResult = (arr, res) => {
    let obj = {};
    let homeTeam = [];
    let awayTeam = [];

    // for (let i = 0; i < arr.length; i++) {

    if (arr.length == res.length) {
        for (let i = 0; i < res.length; i++) {
            let currentArray = res[i];
            if (currentArray == 0) {
                homeTeam.push(arr[i][0]);

                // obj['homeTeam'] += ${arr[i][0]}`;
            } else {
                awayTeam.push(arr[i][1]);
                // obj['awayTeam'] += arr[i][1];
            }
        }
    }
    // if (currentArray != null) {
    //     for (let j = 0; j < res.length; j++) {
    //         if (res[j] == 0) {
    //             // homeTeam.push(currentArray[0]);
    //             if (!obj[currentArray[0]]) {
    //                 obj[currentArray[0]] = 1
    //             } else {
    //                 obj[currentArray[0]]++;
    //             }
    //         }
    //     }
    // }
    // }

    console.log(obj, awayTeam, homeTeam);
}
let arr = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
]
let res = [0, 0, 1];
teamResult(arr, res);