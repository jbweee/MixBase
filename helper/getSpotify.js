const request = require('request');
const config = require('../config.js');
// e847d955fe0a48a9af25077443749640
// 5b766eb68ac4413c9767749f46d87ce5
var client_id = config.CLIENT_ID; // Your client id
var client_secret = config.CLIENT_SECRET; // Your secret

// your application requests authorization
var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

module.exports = (term) => {request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {

    // use the access token to access the Spotify Web API
    var token = body.access_token;
    var options = {
      url: `https://api.spotify.com/v1/search?q=name:${term}&type=track&limit=10`,
      headers: {
        'Authorization': 'Bearer ' + token
      },
      json: true
    };

    request.get(options, function(error, response, body) {
      console.log(body.tracks);
      console.log(body.tracks.items);
    });
  }
})};