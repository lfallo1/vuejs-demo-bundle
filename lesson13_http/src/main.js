import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
// var VueAsyncData = require('vue-async-data')
//
// Vue.use(VueAsyncData)
Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
