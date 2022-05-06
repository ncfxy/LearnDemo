
class Queue {

    private items: any[];
    constructor(items?: any[]) {
        this.items = items || []
    }

    enqueue(element: any) {
        this.items.push(element);
    }

    dequeue() {
        return this.items.shift();
    }

    front() {
        return this.items[0];
    }

    clear() {
        this.items = [];
    }

    get size() {
        return this.items.length;
    }

    get isEmpty() {
        return !this.items.length;
    }

    print() {
        console.log(this.items.toString());
    }
}

const queue = new Queue();
console.log(queue.isEmpty);

queue.enqueue('John');
queue.enqueue('Jack');
queue.enqueue('Camila');
console.log(queue.size);
console.log(queue.isEmpty);
queue.dequeue();
queue.dequeue();
queue.print();