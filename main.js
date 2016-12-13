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