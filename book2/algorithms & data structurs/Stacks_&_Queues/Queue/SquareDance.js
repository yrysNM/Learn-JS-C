const Queue = require("./Queue");
const read = require("fs");
const path = require("path");
const readLine = require("readline");

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


}

let dan = new Dancer();
dan.getDancer();
dan.dance(dan.getMale(), dan.getFemale());
if (!dan.getFemale().empty()) {
    console.log(dan.getFemale().front().name + " is waiting to dance.");
}
if (!dan.getMale().empty()) {
    console.log(dan.getMale().front().name + " is waiting to dance.");
}