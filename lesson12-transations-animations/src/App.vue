<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr />
                <button class="btn btn-primary" @click="show = !show">Show Additional Alert</button>
                <button class="btn btn-primary" @click="showOther = !showOther">Show Additional Alert</button>
                <br><br>
                <alert-list :alerts="alerts" :animated="true"></alert-list>

                <transition name="slide-vertical" mode="out-in" appear>
                  <div v-if="show" class="alert alert-info" key="info">Additional Info</div>
                  <div v-else class="alert alert-warning" key="warning">Additional Warning</div>
                </transition>

                <transition
                    enter-active-class="animated bounce"
                    leave-active-class="animated shake">
                  <div v-if="showOther" class="text-success">Some other text</div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>

    import Alerts from './Alerts.vue';

    export default {
        components : {
          'alert-list' : Alerts
        },
        data() {
            return {
              show: false,
              showOther: false,
              alerts : [
                {id: 1, type:'success', msg:'success message', show:true},
                {id: 2, type:'danger', msg:'ya done something horrible', show:false},
                {id: 3, type:'warning', msg:'just a warning', show:false},
                {id: 4, type:'info', msg:'info message example', show:false}
              ]
            }
        }
    }
</script>

<style scoped>

/* slide-enter transition / animation classes */

.slide-vertical-enter{
  opacity: 0;
}

.slide-vertical-enter-active{
  animation: slide-in 0.3s ease-out forwards;
}

.slide-vertical-leave-active{
  animation: slide-out 0.3s ease-out forwards;
  transition: 0.3s;
}

.slide-vertical-leave-to{
  opacity: 0;
}

@keyframes slide-in{
  from{
    opacity: 0;
    transform:translateY(-15px);
  }
  to{
    opacity: 1;
    transform:translateY(0px);
  }
}

@keyframes slide-out{
  from{
    transform:translateY(0px);
  }
  to{
    transform:translateY(15px);
  }
}

</style>
