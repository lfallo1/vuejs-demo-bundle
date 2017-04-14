<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Built-in Directives</h1>
                <p v-text="'Some Text'"></p>
                <p v-html="'<strong>Some strong text</strong>'"></p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <div v-if-manager:text-success.bold="user" />
                <input type="text" v-model="user.fname" v-focus/>
                <input type="text" v-model="user.lname" />
                <label for="manager">Manager</label>
                <input name="manager" type="checkbox" v-model="user.manager" />
                <p v-highlight:background.delayed="'red'">Color this</p>
                <p v-local-highlight:background.delayed.blink="{mainColor: 'red', secondColor: 'green', delay: 500}">Color this, too</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
          return {
            user : {
              username : 'lfallo1',
              fname : 'lance',
              lname : 'fallon',
              email : 'fallon.lance@gmail.com',
              manager : false
            }
          }
        },
        computed : {
          fullname(){
            return this.user.fname + ' ' + this.user.lname
          }
        },
        directives: {
            'focus' : {
              inserted(el,binding,vnode){
                el.focus();
              }
            },
            'if-manager' : {
              bind(el,binding,vnode){
                console.log(binding.name + " bind");
                if(binding.arg){
                    el.setAttribute('class', binding.arg);
                }

                if(binding.modifiers['bold']){
                    el.style.fontWeight = 'bold';
                }
              },
              inserted(el,binding,vnode){
                console.log(binding.name + " inserted");
                let {fname,lname} = binding.value;
                el.innerHTML = fname.substring(0,1).toUpperCase() + fname.substring(1).toLowerCase() + " " +
                  lname.substring(0,1).toUpperCase() + lname.substring(1).toLowerCase();
                let small = document.createElement('i');
                small.innerHTML = ' (I only show if manager)';
                small.style.color="black";
                el.appendChild(small);
                el.style.display = binding.value.manager ? 'block' : 'none';
              },
              update(el,binding,vnode){
                console.log(binding.name + " update");
                let {fname,lname} = binding.value;
                el.innerHTML = fname.substring(0,1).toUpperCase() + fname.substring(1).toLowerCase() + " " +
                  lname.substring(0,1).toUpperCase() + lname.substring(1).toLowerCase();
                let small = document.createElement('i');
                small.innerHTML = ' (I only show if manager)';
                small.style.color="black";
                el.appendChild(small);
                el.style.display = binding.value.manager ? 'block' : 'none';
              },
              componentUpdated(el,binding,vnode){
                console.log(binding.name + " componentUpdated");
              },
              unbind(el,binding,vnode){
                console.log(binding.name + " unbind");
              }
            },
            'local-highlight': {
                bind(el, binding, vnode) {
                    var delay = 0;
                    if (binding.modifiers['delayed']) {
                        delay = 3000;
                    }
                    if (binding.modifiers['blink']) {
                        let mainColor = binding.value.mainColor;
                        let secondColor = binding.value.secondColor;
                        let currentColor = mainColor;
                        setTimeout(() => {
                            setInterval(() => {
                                currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
                                if (binding.arg == 'background') {
                                    el.style.backgroundColor = currentColor;
                                } else {
                                    el.style.color = currentColor;
                                }
                            }, binding.value.delay);
                        }, delay);
                    } else {
                        setTimeout(() => {
                            if (binding.arg == 'background') {
                                el.style.backgroundColor = binding.value.mainColor;
                            } else {
                                el.style.color = binding.value.mainColor;
                            }
                        }, delay);
                    }
                }
            }
        }
    }
</script>

<style>
</style>
