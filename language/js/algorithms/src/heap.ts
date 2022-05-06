
class Heap {
    private items: any[];

    constructor(data: any) {
        this.items = [];
        if (data && (data instanceof Array)) {
            for (let i = 0;i < data.length; i++) {
                this.insert(data[i]);
            }
        }
    }

    insert(value: any) {
        this.items.push(value);
        var index = this.items.length - 1;
        var fatherIndex = Math.floor((index - 1) / 2);
        while(index > 0) {
            if (this.items[index] < this.items[fatherIndex]) {
                var temp = this.items[index];
                this.items[index] = this.items[fatherIndex];
                this.items[fatherIndex] = temp;
            }
            index = fatherIndex;
            fatherIndex = Math.floor((index - 1) / 2);
        }
    }

    pop() {
        if(this.items.length < 1){
            return null;
        }
        if(this.items.length === 1){
            return this.items.pop();
        }
        let value = this.items[0];
        this.items[0] = this.items.pop();
        let maxIndex = this.items.length - 1;
        let index = 0;
        while(index < maxIndex) {
            let leftIndex = 2 * index + 1;
            let rightIndex = 2 * index + 2;
            let selectIndex = -1;
            if(leftIndex === maxIndex) {
                selectIndex = leftIndex;
            } else if(leftIndex < maxIndex) {
                selectIndex = this.items[leftIndex] < this.items[rightIndex] ? 
                    leftIndex : rightIndex; 
            }
            if(selectIndex === -1 || this.items[index] < this.items[selectIndex]) {
                break;
            } else {
                let temp = this.items[index];
                this.items[index] = this.items[selectIndex];
                this.items[selectIndex] = temp;
                index = selectIndex;
            }
        }
        return value;
    }

    get isEmpty() {
        return !this.items.length;
    }

    print() {
        console.log(this.items.toString());
    }
}

// test
var heap = new Heap([1, 3, 5, 11, 4, 6, 7, 12, 15, 10, 9, 8]);
heap.print();
// insert
heap.insert(2);
heap.print();
// delete
heap.pop();
heap.print();

heap.insert(1);
heap.insert(2);
heap.insert(2);
heap.insert(2);
heap.insert(2);
heap.insert(2);
heap.insert(2);

while(!heap.isEmpty) {
    console.log(heap.pop());
}