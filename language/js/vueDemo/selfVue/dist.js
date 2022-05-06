function defineReactive(data, key, val) {
    observe(val); // 递归遍历所有子属性
    var dep = new Dep();
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            // 是否需要添加订阅者
            if (Dep.target) {
                dep.addSub(Dep.target); // 在这里添加一个订阅者
            }
            return val;
        },
        set: function (newVal) {
            if (val === newVal) {
                return;
            }
            val = newVal;
            console.log('属性' + key + '已经被监听了， 现在值为:"' + newVal.toString() + '"');
            dep.notify(); // 如果数据变化，通知所有订阅者
        }
    });
}
function observe(data) {
    if (!data || typeof data != 'object') {
        return;
    }
    Object.keys(data).forEach(function (key) {
        defineReactive(data, key, data[key]);
    });
}
var Dep = /** @class */ (function () {
    function Dep() {
        this.subs = [];
    }
    Dep.prototype.addSub = function (sub) {
        this.subs.push(sub);
    };
    Dep.prototype.notify = function () {
        this.subs.forEach(function (sub) {
            sub.update();
        });
    };
    Dep.target = null;
    return Dep;
}());
var library = {
    book1: {
        name: ''
    },
    book2: ''
};
observe(library);
library.book1.name = 'vue权威指南'; // 属性name已经被监听了，现在值为：“vue权威指南”
library.book2 = '没有此书籍'; // 属性book2已经被监听了，现在值为：“没有此书籍”
/// <reference path="observer.ts" />
var Watcher = /** @class */ (function () {
    function Watcher(vm, exp, cb) {
        this.cb = cb;
        this.vm = vm;
        this.exp = exp;
        this.value = this.get();
    }
    Watcher.prototype.update = function () {
        return this.run();
    };
    Watcher.prototype.run = function () {
        var value = this.vm.data[this.exp];
        var oldValue = this.value;
        if (value !== oldValue) {
            this.value = value;
            this.cb.call(this.vm, value, oldValue);
        }
    };
    Watcher.prototype.get = function () {
        Dep.target = this; // 缓存自己
        var value = this.vm.data[this.exp]; // 强制执行监听器里的get函数
        Dep.target = null; // 释放自己
        return value;
    };
    return Watcher;
}());
/// <reference path="observer.ts" />
/// <reference path="watcher.ts" />
var Compile = /** @class */ (function () {
    function Compile(el, vm) {
        this.vm = vm;
        this.el = document.querySelector(el);
        this.fragment = null;
        this.init();
    }
    Compile.prototype.init = function () {
        if (this.el) {
            this.fragment = this.nodeToFragment(this.el);
            this.compileElement(this.fragment);
            this.el.appendChild(this.fragment);
        }
    };
    Compile.prototype.nodeToFragment = function (el) {
        var fragment = document.createDocumentFragment();
        var child = el.firstChild;
        while (child) {
            // 将Dom元素移入fragment中
            fragment.appendChild(child);
            child = el.firstChild;
        }
        return fragment;
    };
    /**
 * 处理{{}}的形式
 *
 * @param {Element} el
 */
    Compile.prototype.compileElement = function (el) {
        var childNodes = el.childNodes;
        var self = this;
        [].slice.call(childNodes).forEach(function (node) {
            var reg = /\{\{(.*)\}\}/;
            var text = node.textContent;
            if (self.isElementNode(node)) {
                self.compile(node);
            }
            else if (self.isTextNode(node) && reg.test(text)) {
                // 判断是否是符合这种形式{{}}的指令
                self.compileText(node, reg.exec(text)[1]);
            }
            if (node.childNodes && node.childNodes.length) {
                self.compileElement(node); // 继续递归遍历子节点
            }
        });
    };
    Compile.prototype.compileText = function (node, exp) {
        var self = this;
        var initText = this.vm[exp];
        this.updateText(node, initText); // 将初始化的数据初始化到视图中
        new Watcher(this.vm, exp, function (value) {
            self.updateText(node, value);
        });
    };
    Compile.prototype.updateText = function (node, value) {
        node.textContent = typeof value == 'undefined' ? '' : value;
    };
    Compile.prototype.compile = function (node) {
        var nodeAttrs = node.attributes;
        var self = this;
        Array.prototype.forEach.call(nodeAttrs, function (attr) {
            var attrName = attr.name;
            if (self.isDirective(attrName)) {
                var exp = attr.value;
                var dir = attrName.substring(2);
                if (self.isEventDirective(dir)) {
                    self.compileEvent(node, self.vm, exp, dir);
                }
                else {
                    self.compileModel(node, self.vm, exp, dir);
                }
                node.removeAttribute(attrName);
            }
        });
    };
    Compile.prototype.compileEvent = function (node, vm, exp, dir) {
        var eventType = dir.split(':')[1];
        var cb = vm.methods && vm.methods[exp];
        if (eventType && cb) {
            node.addEventListener(eventType, cb.bind(vm), false);
        }
    };
    Compile.prototype.compileModel = function (node, vm, exp, dir) {
        var self = this;
        var val = this.vm[exp];
        this.modelUpdater(node, val);
        new Watcher(this.vm, exp, function (value) {
            self.modelUpdater(node, value);
        });
        node.addEventListener('input', function (e) {
            var newValue = e.target.value;
            if (val === newValue) {
                return;
            }
            self.vm[exp] = newValue;
            val = newValue;
        });
    };
    Compile.prototype.modelUpdater = function (node, value, oldValue) {
        node.value = typeof value == 'undefined' ? '' : value;
    };
    Compile.prototype.isDirective = function (attr) {
        return attr.indexOf('v-') == 0;
    };
    Compile.prototype.isEventDirective = function (dir) {
        return dir.indexOf('on:') === 0;
    };
    Compile.prototype.isElementNode = function (node) {
        return node.nodeType == 1;
    };
    Compile.prototype.isTextNode = function (node) {
        return node.nodeType == 3;
    };
    return Compile;
}());
/// <reference path="observer.ts" />
/// <reference path="watcher.ts" />
/// <reference path="compile.ts" />
var SelfVue = /** @class */ (function () {
    function SelfVue(options) {
        var self = this;
        this.data = options.data;
        this.methods = options.methods;
        Object.keys(this.data).forEach(function (key) {
            self.proxyKeys(key);
        });
        observe(this.data);
        new Compile(options.el, this);
        options.mounted.call(this); // 所有事情处理好后执行mounted函数
        return this;
    }
    SelfVue.prototype.proxyKeys = function (key) {
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
    };
    return SelfVue;
}());
