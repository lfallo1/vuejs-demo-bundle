new Vue({
  el: '#app',
  data: {
    title : 'My Title',
    url: 'http://www.google.com',
    completeLink: '<a href="http://www.google.com">Google</a>',
    buttonClass: '',
    buttonStyle: {'font-size':'22px'},
    lastButtonClick: false,
    colorMap: ['text-orange','text-blue', 'text-green', 'text-red'],
    logo : './google.png',
    buttonStats : {
      enter : 0,
      leave : 0,
      clicks : 0
    },
    x: 0,
    y: 0
  },
  methods: {
    sayHello: function (url) {
      return 'Hellow inside [sayHello]: ' + url;
    },
    toggleColor: function(evt, customArg){

      this.buttonStats.clicks++

      console.log('event',evt);
      console.log('custom arg', customArg)

      this.title = 'Someone elses title'; //dummy declaration to demo v-once

      this.lastButtonClick = new Date();
      var calc = this.lastButtonClick.getTime() % 4;
      this.buttonClass = this.colorMap[calc];
      this.buttonStyle = {'font-size' : (calc+1) * 10 + 'px'};
    },
    updateCoordinates: function(evt){
      this.x = evt.clientX;
      this.y = evt.clientY;
    },
    alertMe: function(evt){
      alert('you clicked enter after typing ' + evt.target.value);
    }
  },
  computed: {
    isValidLink: function(){
      var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return pattern.test(this.url);
    }
  }
})
