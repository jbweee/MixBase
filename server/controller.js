const getSpotify = require('../helper/getSpotify.js'); 
const db = require('../database/index.js');
const config = require('../config.js');
var my_client_id = config.CLIENT_ID;
// var client_secret = config.CLIENT_SECRET;

module.exports = {
  search: {
    fetch: (req, res) => {
      let searchTerm = req.query.searchTerm;
      // var getData = async ( () => { 
      getSpotify(searchTerm, (err, data) => {
        if (err) {
          console.error('Error fetching from Spotify API')
        } else {
          res.send(data);
        }
      });
    }
  },

  login: {
    fetch: (req, res) => {
      var scopes = 'user-read-private user-read-email';
      res.redirect('https://accounts.spotify.com/authorize' +
        '?response_type=code' +
        '&client_id=' + my_client_id +
        (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
        '&redirect_uri=' + encodeURIComponent('http://localhost:3000/search/'));
    }
  }

  // saved: {
  //   get: (req, res) => {
      
  //   }, 

  //   post: (req, res) => {

  //   }
  // }
}