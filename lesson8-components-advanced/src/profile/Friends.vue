<template>
  <div class="list-group">
    <a href="#" class="list-group-item active">
      User friends area
    </a>
    <a href="#" class="list-group-item">John</a>
    <a href="#" class="list-group-item">Bill</a>
    <a href="#" class="list-group-item">Mike</a>
    <a href="#" class="list-group-item">Paul</a>
  </div>
</template>

<script>
export default{
  created(){
    console.log('friends created')
  },
  mounted(){
    console.log('friends mounted')
  },

  destroyed(){
    console.log('friends destroyed')
  },
  activated(){
    console.log('friends activated');
  },
  deactivated(){
    console.log('friends deactivated');
  }
}
</script>

<style scoped>
  div{
    background: orange;
  }
</style>
