<template>
    <div class="container artist-wrapper well well-sm">
      <img :src="artist.images[0].url" width="240px" />
      <div class="artist-name">{{artist.name}}</div>
      <div class="artist-genres">{{artist.genres.toString()}}</div>
    </div>
</template>

<script>

    export default {

      props : ['artist'],

      data(){
        return { }
      },

      methods: {
      }
    }
</script>

<style scoped>
</style>
