<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User named {{name}}!</p>
        <button @click="randomName">Random name</button>
        <span>{{names.toString()}}</span>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :name="name"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :name="name" :editName="editName" @editNameEvent="editName($event)"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';
    import { eventBus } from '../main.js';

    export default {
      data : function(){
        return {
          'name' : 'Lance',
          'names' : ['Lance','Kara','Mary','Bob','Jim']
        }
      },
      methods : {
        randomName(){
          this.name = this.names[Math.floor(Math.random()*this.names.length)];
        },
        editName(name){
          this.name = name;
        }
      },
      components: {
          appUserDetail: UserDetail,
          appUserEdit: UserEdit
      },
      watch : {
        name : function(newValue){
            if(this.names.indexOf(newValue) <0){
              this.names.push(newValue);
              console.log('added new name');
            }
        }
      },
      created(){
        eventBus.$on('editNameEvent', this.editName);
      }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
