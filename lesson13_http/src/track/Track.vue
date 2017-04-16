<template>
  <div class="track-wrapper">
    <div class="text-center"
        @mouseenter="start"
        @mouseleave="stop">
        <img :src="track.album.images[0].url" width="240px" />
        <div class="track-name">{{track.name}}</div>
        <div class="track-duration">{{formattedMilliseconds}}</div>
        <div class="track-popularity">
          ({{track.popularity}})
          <span class="glyphicon glyphicon-star" v-for="num in popularity"></span>
        </div>
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
      },
      computed: {
        formattedMilliseconds(){
          const minutes = Math.floor(this.track.duration_ms / 1000 / 60);
          const seconds = Math.round((this.track.duration_ms / 1000) % 60);
          return minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
        },
        popularity(){
          return Math.ceil(this.track.popularity / 20);
        }
      }
    }
</script>

<style scoped>
</style>
