new Vue({
  el: '#app',
  data: {
    counter : 0,
    secondCounter : 0,
    attached : {
      red : false,
      blue : false,
      green : false
    },
    divSize : '',
    progress : 0,
    users : [{id:101,name:'Lance'},{id:102,name:'Mary'}]
  },
  methods: {
    attach: function(prop){
      this.attached[prop] = !this.attached[prop];
    },
    startProgress: function(){
      this.progress += 0.25;
      if(this.progress < 100){
        var vm = this;
        setTimeout(function(){
          vm.startProgress();
        },1);
      }
    }
  },
  computed: {
    counterResult : function(){
      return this.counter > 5 ? 'Greater than 5' : 'Less than or equal to 5';
    },
    divSizeClass : function(){
      if(!this.divSize){
        return '';
      }
      return this.divSize.toLowerCase() == 'lg' ? 'block-lg'  : this.divSize.toLowerCase() == 'sm' ? 'block-sm' : '';
    },
    currentProgress : function(){
      debugger
      return {width: this.progress/2 + '%'};
    }
  },
  watch: {
    counter : function(newValue, oldValue){
      var vm = this;
      if(newValue > 10){
        //this timeout is 100% pointless, but just here to show that $watch can be used for async operations as opposed to computed which must be synchronous
        setTimeout(function(){
          vm.counter = oldValue;
        },1000)
      }
    }
  },
  created: function(){
    this.startProgress();
  }
})

/**

Watch: can be asynchronous, does not return a value
Computed: synchronous, cached, only runs when the properties in its function may have been changed.  must return a value
Methods: run every time a value changes, as Vue is not aware of what's in the method and whether or not it needs to be invoked

*/
