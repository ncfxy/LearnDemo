

function defineReactive(data:Object, key:string, val:any) {
    observe(val); // 递归遍历所有子属性
    var dep:Dep = new Dep();
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function(){
            // 是否需要添加订阅者
            if(Dep.target) { // 判断是否需要添加订阅者
                dep.addSub(Dep.target); // 在这里添加一个订阅者
            }
            return val;
        },
        set: function(newVal){
            if(val === newVal) {
                return;
            }
            val = newVal;
            console.log('属性' + key + '已经被监听了， 现在值为:"'+ newVal.toString() + '"');
            dep.notify();  // 如果数据变化，通知所有订阅者
        }
    })
}

function observe(data:any) {
    if(!data || typeof data != 'object') {
        return;
    }
    Object.keys(data).forEach(function(key){
        defineReactive(data, key, data[key]);
    })
}

class Dep{
    static target:any = null;
    subs: Array<any>;
    constructor(){
        this.subs = [];
    }
    addSub(sub:any){
        this.subs.push(sub);
    }
    notify() {
        this.subs.forEach(function(sub){
            sub.update();
        })
    }
}

var library = {
    book1: {
        name: ''
    },
    book2: ''
};

observe(library);
library.book1.name = 'vue权威指南'; // 属性name已经被监听了，现在值为：“vue权威指南”
library.book2 = '没有此书籍';  // 属性book2已经被监听了，现在值为：“没有此书籍”