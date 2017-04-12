import Vue from 'vue'
import App from './App.vue'

var greetingComponent = Vue.component('greeting',{
  data: function(){
    return{
        message : 'Hello'
    }
  },
  methods : {
    init : function(){
      this.startTimer();
    },
    startTimer : function(){
      // var vm = this;
      // vm.value = Math.ceil(Math.random()*100);
      // setTimeout(function(){
      //   vm.message = 'greeting ' + vm.value;
      //   vm.startTimer();
      // },vm.value);
    }
  },
  created : function(){
    this.init();
  },
  template: '<h4>{{message}}</h4>'
});

new Vue({
  el: '#app',
  render: h => h(App),
  components : {
    'greeting' : greetingComponent
  }
})
