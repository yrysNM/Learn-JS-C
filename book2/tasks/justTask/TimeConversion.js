const timeConversion = (stringTime) => {
    let ap = stringTime.charAt(stringTime.length - 2);
    stringTime = stringTime.substring(0, stringTime.length - 2);
    if (ap == 'A') {
        let hh = parseInt(stringTime.substring(0, 2));
        if (hh == 12) hh = 0;
        let s = +hh;
        if (s.length == 1) {
            s = "0" + s;
        }
        console.log(s + stringTime.substring(2, stringTime.length));

    } else {
        let hh = parseInt(stringTime.substring(0, 2));
        if (hh != 12) hh += 12;
        let s = +hh;
        if (s.length == 1) {
            s = "0" + s;

        }
        console.log(hh + stringTime(2, stringTime.length));
    }
}

const filterInt = (value) => {
    if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
        return Number(value);
    return NaN;
}