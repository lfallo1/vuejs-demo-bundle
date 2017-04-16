<template>
  <div class="track-wrapper">
    <div class="text-center"
        @mouseenter="start"
        @mouseleave="stop">
        <img :src="track.album.images[0].url" width="240px" />
        <div class="track-name">{{track.name}}</div>
        <div class="track-duration">{{track.duration_ms}}</div>
        <div class="track-popularity">{{track.popularity}}</div>
    </div>
    <audio ref="audioPlayer">
       <source :src="track.preview_url" />
    </audio>
  </div>
</template>

<script>

    export default {
      mounted(){
        this.$watch('track', ()=>this.$refs.audioPlayer.load());
      },
      props: ['track'],
      methods: {
        start(){
          this.$refs.audioPlayer.play();
        },
        stop(){
          this.$refs.audioPlayer.pause();
          this.$refs.audioPlayer.currentTime = 0;
        }
      }
    }
</script>

<style scoped>
</style>
