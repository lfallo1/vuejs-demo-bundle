<template>
  <div class="container">
    <home></home>
    <app-footer></app-footer>
  </div>
</template>
<script>

  import Home from './home/Home.vue'
  import Footer from './shared/Footer.vue';

  export default {
    components : {
      'home' : Home,
      'app-footer' : Footer
    }
  }
</script>

<style>

</style>
