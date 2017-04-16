import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

const SPOTIFY_BASE = 'https://api.spotify.com/v1';

Vue.use(VueResource);
Vue.http.options.root = SPOTIFY_BASE;
Vue.http.interceptors.push((request,next)=>{
  console.log('Global HTTP interceptor (REQUEST): ', request);
  next((response)=>{
    console.log('Global HTTP interceptor (RESPONSE): ', response);
  });
})

new Vue({
  el: '#app',
  render: h => h(App)
})
