<template>
  <div class="container">
    <app-home></app-home>
    <app-footer></app-footer>
  </div>
</template>
<script>

  import Home from './home/Home.vue'
  import Footer from './shared/Footer.vue';

  export default {
    components : {
      'app-home' : Home,
      'app-footer' : Footer
    }
  }
</script>

<style>

</style>
