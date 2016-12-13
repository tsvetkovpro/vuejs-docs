var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})


var app2 = new Vue({
	el: '#app-2',
	data: {
		message: 'Вы навели на текст: ' + new Date()
	}
})


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
      { text: 'Посадить дерево' },
      { text: 'Построить дом' },
      { text: 'Вырастить сына' }
    ]
  }
})


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


var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})