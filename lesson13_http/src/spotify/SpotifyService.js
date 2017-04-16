import Vue from 'vue';

const SPOTIFY_SEARCH_ARTIST = 'search?type=artist&limit=1';

export default{

  topTracksByArtistId : function(id){
    return Vue.http.get(`artists/${id}/top-tracks?country=US`).then(res => {
      return res.json();
    }, err=>{
      throw err.json()
    })
  },

  searchArtist : function(searchText){
      return Vue.http.get(`${SPOTIFY_SEARCH_ARTIST}&q=${encodeURI(searchText)}`).then(res=>{
        return res.json();
      }, err =>{
        throw err.json()
      })
  }

}
