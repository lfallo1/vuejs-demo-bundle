import Vue from 'vue';

const SPOTIFY_BASE = 'https://api.spotify.com/v1/';
const SPOTIFY_SEARCH_ARTIST = 'search?type=artist&limit=1';

export default{

  searchArtist : function(searchText){
    return new Promise((resolve,reject)=>{
      Vue.http.get(`${SPOTIFY_BASE}${SPOTIFY_SEARCH_ARTIST}&q=${encodeURI(searchText)}`).then(res=>{
        if(res.body.artists.items.length > 0){
          const artist = res.body.artists.items[0];
          Vue.http.get(`${SPOTIFY_BASE}artists/${artist.id}/top-tracks?country=US`).then(res => {
            resolve({artist: artist, tracks: res.body.tracks});
          }, err=>{ reject(err) })
        }
      }, err =>{ reject(err) })
    });
  }

}
