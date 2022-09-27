const Queue = require("./Queue");

let ed = new Queue();
class Patient {


    constructor(name, code) {
        // this.getStore = new Queue().getDataStore();
        this.name = name;
        this.code = code;

    }

    dequeue = () => {
        let priority = ed.getDataStore().code;
        for (let i = 0; i < ed.getDataStore().length; i++) {
            if (ed.getDataStore()[i].code < priority) {
                priority = i;
            }
        }
        return this.dataStore.splice(priority, 1);
    }

    toString = () => {
        let str = "";
        for (let i = 0; i < ed.getDataStore().length; i++) {
            str += ed.getDataStore()[i].name + " code: " +
                ed.getDataStore()[i].code + "\n";
        }
        return str;
    }
}

let p = new Patient("Smith", 5);
ed.enqueue(p);
p = new Patient("Jones", 4);
ed.enqueue(p);
p = new Patient("Fehrenbach", 6);
ed.enqueue(p);
p = new Patient("Brown", 1);
ed.enqueue(p);
p = new Patient("Ingram", 1);
ed.enqueue(p);
console.log(ed.toString());
let seen = ed.dequeue();
console.log(seen);
console.log("Patient being treated: " + seen.name);
console.log("Patients waiting to be seen: ")
console.log(ed.toString());
// another round
// let seen = ed.dequeue();
// console.log("Patinet being treated: " + seen[0].name);
