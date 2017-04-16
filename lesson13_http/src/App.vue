<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">

                <!-- Create search component -->
                <input class="form-control" type="text" v-model="searchText" v-on:keyup.enter="search" />
                <button @click.prevent="search" class="btn btn-primary">Search</button>

                <div v-if="artist.id">
                  <Artist :artist="artist" />
                  <div id="track-list-wrapper">
                    <ul class="list-group">
                      <li v-for="track in tracks">
                        <TrackItem :track="track" />
                      </li>
                    </ul>
                  </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import SpotifyApi from './spotify/SpotifyService.js';
    import TrackItem from './track/Track.vue';
    import Artist from './artist/Artist.vue';

    export default {

      components: {
        Artist,
        TrackItem
      },

      data(){
        return {
          searchText : '',
          searchMode : '',
          searchModes : ['Artist', 'Playlist', 'Song'],
          artist : {},
          tracks : []
        }
      },

      methods: {
        search : function(){
          if(this.searchMode === 'Artist'){
            this.searchArtist()
          }
        },
        searchArtist: function(){
          const self = this;
          SpotifyApi.searchArtist(this.searchText).then(function(data){
            self.artist = data.artist;
            self.tracks = data.tracks;
          }, err=>console.log(err))
        }
      },

      created(){
        this.searchMode = this.searchModes[0];
      }
    }
</script>

<style>
</style>
