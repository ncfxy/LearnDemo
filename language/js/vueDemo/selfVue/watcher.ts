/// <reference path="observer.ts" />

class Watcher{
    // 监听的对象
    vm: any;
    // 回调函数
    cb: Function;
    // 观察的属性名
    exp: any;
    value: any;
    constructor(vm:any, exp:any, cb:Function){
        this.cb = cb;
        this.vm = vm;
        this.exp = exp;
        this.value = this.get();
    }

    update() {
        return this.run();
    }

    run() {
        var value = this.vm.data[this.exp];
        var oldValue = this.value;
        if(value !== oldValue) {
            this.value = value;
            this.cb.call(this.vm, value, oldValue);
        }
    }

    get() {
        Dep.target = this;  // 缓存自己
        var value = this.vm.data[this.exp];  // 强制执行监听器里的get函数
        Dep.target = null;  // 释放自己
        return value;
    }
    
}