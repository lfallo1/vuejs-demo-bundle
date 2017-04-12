<template>
  <div class="container">
    <home></home>
    <app-footer></app-footer>
  </div>
</template>
<script>

import Home from './Home.vue'
import Footer from './Footer.vue';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components : {
    'home' : Home,
    'app-footer' : Footer
  }
}
</script>

<style>

</style>
