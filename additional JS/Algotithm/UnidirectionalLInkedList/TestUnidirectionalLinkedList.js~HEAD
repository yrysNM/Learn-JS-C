class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }

    getData() {
        return this.data;
    }
}

class LinkedList {
    init() {
        this.head = new Node("San Francisco", null);
        let nodeOakland = new Node("Oakland", null);
        this.head.next = nodeOakland;

        let nodeBerkeley = new Node("Berkeley", null);
        nodeOakland.next = nodeBerkeley;

        this.tail = new Node("Astana", null);
        nodeBerkeley.next = this.tail;

        return this.head;
    }

    print(node) {
        let p = node;
        let data = "";
        while (p != null) {
            data += p.getData();
            data += " -> ";
            p = p.next;
        }
        console.log(data);
    }
}

let linkedList = new LinkedList();
let head = linkedList.init();
linkedList.print(head);