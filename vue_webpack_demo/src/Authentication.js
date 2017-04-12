export default{

  user : {},

  setUser: function(username,password){
    this.user = {'username' : username, 'password' : password}
  },

  getUser: function(){
    return this.isAuthenticated() ? this.user : undefined;
  },

  isAuthenticated: function(){
    return this.user.username;
  },

  login: function(username, password){
    if(username === 'lfallo1' && password === 'snoopy'){
      this.setUser(username,password);
      return true;
    }
    return false;
  },

  logout: function(){
    this.user = {}
  }

}
