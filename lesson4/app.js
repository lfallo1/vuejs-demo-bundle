Vue.component('hello',{
  template: '<h3>Hello from the hello component</h3>'
});


var vue1 = new Vue({
  data: {
    title: 'The VueJS Instance',
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = !this.showParagraph;
      this.updateTitle('The VueJS Instance (Updated)');
      this.setButtonText();
    },
    updateTitle: function(title) {
      this.title = title;
    },
    setButtonText: function(){
      //this will change the dom element directly, but not the vuejs template. And is NOT reactive.
      this.$refs.showParagraphButton.innerText = this.showParagraph ? 'Hide paragraph' : 'Show paragraph';
    },
    init: function(){
      this.setButtonText();
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  },
  onCreated : function(){
    this.init();
  }
});

//another manual mounting
setTimeout(function(){
  vue1.$mount('#app1');
},1000)

//vue built-in properties
console.log('Title: ' + vue1.$data.title);
console.log('showParagraphButton', vue1.$refs.showParagraphButton);

//multiple instances
var vue2 = new Vue({
  el: '#app2',
  data: {
    title: 'Second VUE Instance'
  },
  methods: {
    updateTitle: function(title) {
      vue1.title = 'Changed title from vue2';
    }
  }
});

/**
* Manual mounting example
*/
var vue3 = new Vue({
  data:{
    name : 'VUE 3'
  },
  methods: {
    changeName: function(){
      this.name = 'VUE 3 Name Changed';
    }
  },
  template: '<h3 @click="changeName">Hello from {{name}}</h3>'
});
// vue3.$mount('#app3');
vue3.$mount();
document.getElementById('app3').appendChild(vue3.$el);
