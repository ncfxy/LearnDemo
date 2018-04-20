/// <reference path="observer.ts" />
/// <reference path="watcher.ts" />
/// <reference path="compile.ts" />



class SelfVue{
    data: any;
    methods: any;
    constructor(options){
        var self = this;
        this.data = options.data;
        this.methods = options.methods;

        Object.keys(this.data).forEach(function(key){
            self.proxyKeys(key);
        });

        observe(this.data);
        new Compile(options.el, this);
        options.mounted.call(this); // 所有事情处理好后执行mounted函数
        return this;
    }

    proxyKeys(key) {
        var self = this;
        Object.defineProperty(this, key, {
            enumerable: false,
            configurable: true,
            get: function proxyGetter() {
                return self.data[key];
            },
            set: function proxySetter(newVal) {
                self.data[key] = newVal;
            }
        });
    }
}