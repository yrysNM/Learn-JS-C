class Time {

    constructor(milliSeconds = new Date().getTime(), h = 0, m = 0, s = 0) {
        this.h = h;
        this.m = m;
        this.s = s;
        this.milliSeconds = +milliSeconds;
    }

    setMilliSeconds = (milliSeconds) => {
        if (!milliSeconds) {

            this.milliSeconds = new Date().getTime();
        }
        this.milliSeconds = milliSeconds;
    }
    getHour = () => {
        if (this.h != 0) {
            return this.h;
        }
        return (this.milliSeconds / (1000 * 60 * 60)) % 24 | 0;
    }

    getMinute = () => {
        if (this.m != 0) {
            return this.m;
        }
        return (this.milliSeconds / (1000 * 60)) % 60 | 0;
    }

    getSecond = () => {
        if (this.s != 0) {
            return this.s;
        }

        return (this.milliSeconds / 1000) % 60 | 0;
    }

    toString = () => {
        return `Time ${this.getHour()}:${this.getMinute()}:${this.getSecond()}`;
    }
}

const milliSeconds = "434329400";
const time = new Time();
time.setMilliSeconds(milliSeconds);
console.log(time.toString());

const time2 = new Time();
console.log(time2.toString());