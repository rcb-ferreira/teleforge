class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(item) {
        let node = new Node(item);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node
        }
    }

    appendAt(pos, item) {
        let current = this.head;
        let counter = 1;
        let node = new Node(item);
        if (pos == 0) {
            this.head.prev = node
            node.next = this.head
            this.head = node
        } else {
            while (current) {
                current = current.next;
                if (counter == pos) {
                    node.prev = current.prev
                    current.prev.next = node
                    node.next = current
                    current.prev = node
                }
                counter++
            }
        }
    }

    removeAt(pos) {
        let current = this.head;
        let counter = 1;
        if (pos == 0) {
            this.head = this.head.next;
            this.head.prev = null;
        } else {
            while (current) {
                current = current.next
                if (current == this.tail) {
                    this.tail = this.tail.prev;
                    this.tail.next = null;
                } else if (counter == pos) {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                    break;
                }
                counter++;
            }
        }
    }

    reverse() {
        let current = this.head;
        let prev = null;
        while (current) {
            let next = current.next
            current.next = prev
            current.prev = next
            prev = current
            current = next
        }
        this.tail = this.head
        this.head = prev
    }

    length() {
        let current = this.head;
        let counter = 0;
        while (current !== null) {
            counter++
            current = current.next
        }
        return counter;
    }

    display() {
        let current = this.head;
        let elements = [];
        while (current !== null) {
            elements.push(current.data);
            current = current.next
        }
        return elements.join(" ");
    }

    isEmpty() {
        return this.length() < 1
    }

    traverse(fn) {
        if (!fn || typeof fn !== 'function') {
            console.log("ERROR: 'TRAVERSE' function is undefined!");
            return false;
        }
        let current = this.head;
        while (current !== null) {
            fn(current)
            current = current.next;
        }
        return true;
    }
}

module.exports = {
    DoublyLinkedList
}