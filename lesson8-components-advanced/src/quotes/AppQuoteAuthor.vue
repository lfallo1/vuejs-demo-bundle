<template>
    <div class="well well-sm">
      <p>Name | {{author.name}}</p>
      <p>Email | {{author.email}}</p>
      <p>DOB | {{author.dob}}</p>
    </div>
</template>

<script>
  export default {
    props : {
      'author' : Object
    }
  }
</script>

<style>

</style>
