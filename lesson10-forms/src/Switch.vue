<template>
    <div>
      <div v-for="o in options"
              :id="o.id"
              @click="switched(o.value)"
              :class="{active: value === o.value}">{{o.label}}</div>
    </div>
</template>

<script>
    export default {
        props: {
          value: String,
          options : Array
        },
        methods: {
            switched(val) {
                this.$emit('input', val);
            }
        }
    }
</script>

<style scoped>
    #large, #medium, #small {
        width: 40px;
        height: 20px;
        background-color: lightgray;
        padding: 2px;
        display: inline-block;
        margin: 10px -2px;
        box-sizing: content-box;
        cursor: pointer;
        text-align: center;
    }

    #large:hover, #large.active {
        background-color: lightgreen;
    }

    #medium:hover, #medium.active {
        background-color: lightyellow;
    }

    #small:hover, #small.active {
        background-color: lightcoral;
    }
</style>
