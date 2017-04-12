<template>
  <div class="container">
    <h4>Home page</h4>
    <ul class="list-group">
      <app-server-status v-for="server in 5"></app-server-status>
    </ul>
  </div>
</template>

<script>

  import ServerStatus from '../servers/ServerStatus.vue';

  export default{
    components : {
      'app-server-status' : ServerStatus
    }
  }
</script>
