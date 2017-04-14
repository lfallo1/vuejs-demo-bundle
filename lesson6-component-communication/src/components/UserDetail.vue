<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Username: {{name}}</p>
        <!-- <input v-model="newName" type="text" />
        <button @click="changeName">Change</button> -->
    </div>
</template>

<script>

  //shorthand props is props : yourPropName.... or props : [myProp,anotherProp, etc...]
  //for props/default, the value is a primitive for numbers/strings, but a function for arrays and objects

  export default {

    data : function(){
      return {
        newName : ''
      }
    },
    props : {
      name : {
        type: String,
        default: 'Lance',
        required: false
      }
    }
  }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
