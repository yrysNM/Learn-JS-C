class Dictionary {
    constructor() {
        this.dataStore = new Array();
    }

    add = (key, value) => {
        this.dataStore[key] = value;
    }

    find = (key) => {
        return this.dataStore[key];
    }

    remove = (key) => {
        delete this.dataStore[key];
    }

    showAll = () => {
        for (let k of Object.keys(this.dataStore).sort()) {
            console.log(k + " -> " + this.dataStore[k]);
        }
    }

    count = () => {
        let n = 0;
        for (let k in this.dataStore) {
            n++;
        }
        return n;
    }

    clear = () => {
        for (let k in this.dataStore) {
            delete this.dataStore[k];
        }
    }
}

let pbook = new Dictionary();
pbook.add("Mike", "123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
pbook.add("Andriev", "123");
console.log("David extension: " + pbook.find("David"));
pbook.remove("David");
pbook.showAll();
module.exports = { Dictionary };