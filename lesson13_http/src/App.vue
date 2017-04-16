<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">

                <!-- Create search component -->
                <input class="form-control" type="text" v-model="searchText" v-on:keyup.enter="search" />
                <button @click.prevent="search" class="btn btn-primary">Search</button>

                <div v-if="artist.id">
                  <spotify-artist :artist="artist" />
                  <div id="track-list-wrapper">
                    <ul class="list-group">
                      <li class="list-group-item" v-for="track in tracks">
                        <spotify-track :track="track" />
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
    import Track from './track/Track.vue';
    import Artist from './artist/Artist.vue';

    export default {

      components: {
        'spotify-artist': Artist,
        'spotify-track': Track
      },

      data(){
        return {
          searchText : '',
          artist : {},
          tracks : []
        }
      },

      methods: {
        search : function(){
          const self = this;
          SpotifyApi.searchArtist(this.searchText).then( data=> {
            self.artist = data.artists.items[0];
            SpotifyApi.topTracksByArtistId(self.artist.id).then( data=> {
              self.tracks = data.tracks;
            }, err=>console.log('Error fetching tracks: ', err))
          }, err=>console.log('Error fetching artists: ', err))
        }
      }
    }
</script>

<style>
</style>
