class Node {
    constructor(data, prev, next) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }

    getData = () => {
        return this.data;
    }
}

class DoubleLinkList {
    init() {
        this.head = new Node("San Francisco");
        this.head.prev = null;
        this.head.next = null;

        let nodeOakland = new Node("Oakland");
        nodeOakland.prev = this.head;
        nodeOakland.next = null;
        this.head.next = nodeOakland;

        let nodeBerkelry = new Node("Berkeley");
        nodeBerkelry.prev = nodeOakland;
        this.next = null;
        nodeOakland.next = nodeBerkelry;

        this.tail = new Node("Fremont");
        this.tail.prev = nodeBerkelry;
        this.tail.next = null;
        nodeBerkelry.next = this.tail;

        return this.head;
    }

    print(node) {
        let p = node;
        let end = null;

        while (p != null) {
            let data = p.getData();
            process.stdout.write(data + "-> ");
            end = p;
            p = p.next;
        }
        process.stdout.write(`End !!\n`)
        p = end;

        while (p) {
            let data = p.getData();
            process.stdout.write(data + "-> ");
            p = p.prev;
        }
        process.stdout.write("Start ...");
    }
}

let doubleLinkList = new DoubleLinkList();
let head = doubleLinkList.init();
doubleLinkList.print(head);