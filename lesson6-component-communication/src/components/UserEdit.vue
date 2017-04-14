<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <input v-model="name" type="text" />
        <button @click="submit">Submit</button>
    </div>
</template>

<script>

  import { eventBus } from '../main.js';

  export default {
    props : {
      editName : Function,
      name : String
    },
    methods : {
      submit(){
        eventBus.$emit('editNameEvent', this.name);
        // this.editName(this.name);
        // this.$emit('editNameEvent', this.name)
      }
    }
  }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
