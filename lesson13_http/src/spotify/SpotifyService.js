import Vue from 'vue';

const SPOTIFY_BASE = 'https://api.spotify.com/v1/';
const SPOTIFY_SEARCH_ARTIST = 'search?type=artist&limit=1';

export default{

  topTracksByArtistId : function(id){
    return Vue.http.get(`${SPOTIFY_BASE}artists/${id}/top-tracks?country=US`).then(res => {
      return res.json();
    }, err=>{
      throw err.json()
    })
  },

  searchArtist : function(searchText){
      return Vue.http.get(`${SPOTIFY_BASE}${SPOTIFY_SEARCH_ARTIST}&q=${encodeURI(searchText)}`).then(res=>{
        return res.json();
      }, err =>{
        throw err.json()
      })
  }

}
