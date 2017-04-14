<template>
  <div id="alert-container">
    <div v-for="(alert,i) in alerts">
      <transition :name="animationClass"
          @enter="showNext(i+1)"
          appear>
        <div v-show="alert.show" :class="'alert alert-' + alert.type" :key="alert.id">{{alert.msg}}</div>
      </transition>
    </div>
  </div>
</template>

<script>
    export default {
        data(){
          return {
            delay: 125,
            animationClass: 'slide-horizontal'
          }
        },
        props : ['alerts', 'animated'],
        methods: {
          showNext(i){
            //if not last item, then set the flag for the next alert after a specified delay
            if(i < this.alerts.length){
              setTimeout(()=>{this.alerts[i].show = true}, this.delay);
              return;
            }
          },
          checkAnimation(){
            //check if animation should be disabled
            if(!this.animated){
              this.alerts.forEach((a)=>a.show=true);
              this.delay = 0;
              this.animationClass= '';
            }
          }
        },
        activated(){
          this.checkAnimation();
        },
        mounted(){
          this.checkAnimation();
        }
    }
</script>

<style scoped>

.slide-horizontal-enter{
  transform: translateX(-330px);
}

.slide-horizontal-leave-to{
  transform: translateX(330px);
}

.slide-horizontal-enter, .slide-horizontal-leave-to{
  opacity: 0;
}

.slide-horizontal-enter-active, .slide-horizontal-leave-active{
  transition: 0.7s;
}

</style>
