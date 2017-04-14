import Vue from 'vue'
import App from './App.vue'

// Vue.mixin({
//   created: function () {
//     console.log('Global mixin')
//   }
// });

new Vue({
  el: '#app',
  render: h => h(App)
})
