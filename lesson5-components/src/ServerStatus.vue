<template>
  <li class="list-group-item">
    <p>Server status: <strong :class="status.class">{{status.desc}}</strong></p>
    <button class="btn btn-md btn-default" @click="changeStatus">Change</button>
  </li>
</template>

<script>
  export default{
    data(){
      return {
        status : {},
        statuses : [
            {desc:'Normal',class:'text-success'},
            {desc:'Critical',class:'text-danger'},
            {desc:'Outages Reported',class:'text-warning'}
        ]
      }
    },
    methods: {
      init(){
        this.changeStatus();
      },
      changeStatus(){
        this.status = this.statuses[Math.floor(Math.random() * 3)];
      }
    },
    created(){
      this.init()
    }
  }
</script>
