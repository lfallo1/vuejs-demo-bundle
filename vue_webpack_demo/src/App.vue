<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1></h1>
    <h2>Essential Links</h2>
    <h3 v-if="user">Logged in as {{user.username}}</h3>
    <button v-if="user" @click="signout">sign out</button>
    <button v-else @click="signin">sign in</button>
    <greeting></greeting>
    <greeting></greeting>
    <greeting></greeting>
  </div>
</template>

<script>

import Vue from 'vue';
import auth from './Authentication.js';

//date needs to be a function that returns a new object. otherwise, all instances of a view component
//would reference the same data (pointers to same location in memory)
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      user: undefined
    }
  },
  methods: {
    signin: function(){
      if(auth.login('lfallo1','snoopy')){
        this.user = auth.getUser();
      }
    },
    signout: function(){
      auth.logout();
      this.user = undefined;
    }
  },
  created: function(){
    this.signin();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
