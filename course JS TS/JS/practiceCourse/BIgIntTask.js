function amountOfPages(summary) {
    let str = "";
    let res = [];
    for (let i = 1; i <= summary; i++) {
        str += i;
        res.push(i);
        if (str.length === summary) {
            break;
        }
    }
    console.log(str, res[res.length - 1]);
}

amountOfPages(25);
amountOfPages(5);
amountOfPages(1095);