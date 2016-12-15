
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Привет'
  },
  computed: {
    // геттер вычисляемого значения
    reversedMessage: function () {
      // `this` указывает на инстанс vm
      return this.message.split('').reverse().join('')
    }
  }
})



var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: function () {
      return `${this.firstName} ${this.lastName}`
    }
  }
})



var vm = new Vue({
  el: '#demo1',
  data: {
    firstName: 'Foo1',
    lastName: 'Bar1'
  },
  computed: {
  fullName: {
    // геттер:
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // сеттер:
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
})

