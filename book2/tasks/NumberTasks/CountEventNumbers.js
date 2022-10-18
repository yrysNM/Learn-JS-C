function countEvenNumber(n) {
    let obj = {
        count: 0
    };
    for (let i = 0; i <= n; i++) {
        if (i % 2 == 0) {
            obj.count += 1;
        }
    }

    return obj.count;
}

console.log(countEvenNumber(41));