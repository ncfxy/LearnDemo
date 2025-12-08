
class Stack {
    private items: any[];
    constructor() {
        this.items = [];
    }

    push(element: any) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    get peek() {
        return this.items[this.items.length - 1];
    }
    get isEmpty() {
        return !this.items.length;
    }

    get size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }

    print() {
        console.log(this.items.toString);
    }
}

const stack = new Stack();
console.log(stack.isEmpty);

stack.push(5);
stack.push(8);

console.log(stack.peek);
stack.push(11);
console.log(stack.size);
console.log(stack.isEmpty);