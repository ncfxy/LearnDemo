// 数据渲染
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

// 数据绑定
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: '页面加载于 ' + new Date().toLocaleString()
  }
})

// 条件与循环
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: '学习 JavaScript' },
      { text: '学习 Vue' },
      { text: '整个牛项目' }
    ]
  }
})

// 事件监听
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

// 表单双向绑定
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})

// Vue中的组件
Vue.component('todo-item', {
  // todo-item 组件现在接受一个
  // "prop"，类似于一个自定义特性。
  // 这个 prop 名为 todo。
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: '蔬菜' },
      { id: 1, text: '奶酪' },
      { id: 2, text: '随便其它什么人吃的东西' }
    ]
  }
});

// 计算属性
var app8 = new Vue({
  el: '#app-8',
  data: {
    message: 'Hello!'
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function() {
      // this 指向vm实例
      return this.message.split('').reverse().join('');
    }
  }
});

// 侦听器 watch
var app9 = new Vue({
  el: '#app-9',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question!'
  },
  watch: {
    // 如果 question 发生改变，这个函数就会运行
    question: function(newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...';
      this.getAnswer();
    }
  }, 
  methods: {
    // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
    // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
    // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
    // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
    // 请参考：https://lodash.com/docs#debounce
    getAnswer: _.debounce(
      function() {
        if(this.question.indexOf('?') === -1) {
          this.answer = 'Questions usually contain a question mark. ;-)';
          return;
        }
        this.answer = 'Thinking'
        var vm = this;
        axios.get('https://yesno.wtf/api')
          .then(function(response) {
            vm.answer = _.capitalize(response.data.answer)
          })
          .catch(function(error) {
            vm.answer = 'Error! Could not reach the API. ' + error;
          })
      }
    )
  }
});

// Css与Style绑定
var app10 = new Vue({
  el: '#app-10',
  data: {
    isActive: true,
    error: null
  },
  computed: {
    classObject: function() {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  }
});

// 条件渲染
var app11 = new Vue({
  el: '#app-11',
  data: {
    type: 'A',
    loginType: 'username'
  },
  methods: {
    toggleLoginType: function(){
      this.loginType = this.loginType === 'username' ? '': 'username';
    }
  }
});

// 列表渲染
var app12 = new Vue({
  el: '#app-12',
  data: {
    parentMessage: 'Parent',
    items: [
      {message: 'Foo'},
      {message: 'Bar'}
    ],
    object: {
      firstName: 'John',
      lastName: 'Doe',
      age: 30
    }
  }
});

// v-for使用的例子
Vue.component('todo-item2', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">X</button>\
    </li>\
    ',
    props: ['title']
});
var todoListExample = new Vue({
  el: '#todo-list-example',
  data: {
    newTodoText: '',
    todos: [
      {
        id: 1,
        title: 'Do the dishes',
      },
      {
        id: 2,
        title: 'Take out the trash',
      },
      {
        id: 3,
        title: 'Mow the lawn'
      }
    ],
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function() {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      });
      this.newTodoText = '';
    }
  }
})
