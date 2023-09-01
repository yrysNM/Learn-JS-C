const Queue = require("./Queue");
const read = require("fs");
const readLine = require("readline");
const path = require("path");

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

class Dancer {
    #maleDancers = new Queue();
    #femaleDancers = new Queue();

    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }

    getMale() {
        return this.#maleDancers;
    }

    getFemale() {
        return this.#femaleDancers;
    }

    getDancer = () => {
        let names = [];
        const filename = path.join(__dirname, './data/dancers.txt');
        const data = read.readFileSync(filename, "utf8");
        names = data.split("\n");
        for (let i = 0; i < names.length; i++) {
            names[i] = names[i].trim();

        }

        for (let i = 0; i < names.length; i++) {
            let dancer = names[i].split(" ");
            let gender = dancer[0];
            let name = dancer[1];

            if (gender == "F") {
                this.#femaleDancers.enqueue(new Dancer(name, gender));
            } else {
                this.#maleDancers.enqueue(new Dancer(name, gender));
            }
        }
    }

    dance = (males, females) => {
        console.log("The dance parthers are: \n");
        while (!females.empty() && !males.empty()) {
            let person = females.dequeue();
            let str = ("Female dancer is: " + person.name);
            person = males.dequeue();
            console.log(str + " and the male dancer is: " + person.name);
        }
    }

    countMale = () => {
        return this.#maleDancers.dataStore.length;
    }

    countFemale = () => {
        return this.#femaleDancers.dataStore.length;
    }
}

let dan = new Dancer();
dan.getDancer();
dan.dance(dan.getMale(), dan.getFemale());
if (!dan.getFemale().empty() || dan.countFemale() > 0) {
    console.log(dan.getFemale().front().name + " is waiting to dance.");
    console.log(`There are ${dan.countFemale()} female dancers waiting to dance.`);
}
if (!dan.getMale().empty() || dan.countMale() > 0) {
    console.log(dan.getMale().front().name + " is waiting to dance.");
    console.log(`There are ${dan.countMale()} male dancers waiting to dance.`);
}
