<template>
  <div class="row">
    <div class="col-sm-6 col-md-4">
      <div class="thumbnail">
        <div class="caption">
          <h3>User profile area</h3>
          <p>...</p>
          <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    created(){
      console.log('profile created')
    },
    mounted(){
      console.log('profile mounted')
    },
    destroyed(){
      console.log('profile destroyed')
    },
    activated(){
      console.log('profile activated');
    },
    deactivated(){
      console.log('profile deactivated');
    }
  }
</script>

<style scoped>
  .row{
    margin: auto;
  }
</style>
