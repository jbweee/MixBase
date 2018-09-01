const request = require('request');
const config = require('../config.js');
// e847d955fe0a48a9af25077443749640
// 5b766eb68ac4413c9767749f46d87ce5
var client_id = config.CLIENT_ID; // Your client id
var client_secret = config.CLIENT_SECRET; // Your secret

module.exports = {
  // your application requests authorization
  authOptions: {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  },

  //finds 20 tracks with the specified search query
  findTracks: (term) => {
    request.post(this.authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {
  
        // use the access token to access the Spotify Web API
        var token = body.access_token;
        var options = {
          url: `https://api.spotify.com/v1/search?q=name:${term}&type=track&limit=20`,
          headers: {
            'Authorization': 'Bearer ' + token
          },
          json: true
        };
      }
    })
  },
  // (term) => 
  //   request('POST', 'https://accounts.spotify.com/api/token', this.authOptions)
  //     .getBody('utf8')
  //     .then( (res) => {
  //       // let body = JSON.parse(res.body);
  //       // var token = body.access_token;
  //       console.log(res);
  //       // console.log(token)
  //       let options = {
  //         url: `https://api.spotify.com/v1/search?q=name:${term}&type=track&limit=20`,
  //         headers: {
  //           'Authorization': 'Bearer ' + token
  //         },
  //         json: true
  //       }
  //     })
        
  //   },
    //     function(error, response, body) {
    // if (!error && response.statusCode === 200) {

    //   // use the access token to access the Spotify Web API
    //   var token = body.access_token;
    //   let options = {
    //     url: `https://api.spotify.com/v1/search?q=name:${term}&type=track&limit=20`,
    //     headers: {
    //       'Authorization': 'Bearer ' + token
    //     },
    //     json: true
    //   };
    //   console.log(token);
    //   request
    //     .get(options)
    //     .then( (body) => {
    //       let searchUrl = `https://api.spotify.com/v1/audio-features?ids=`
    //       body.tracks.items.forEach( (track) => {
    //         searchUrl += `${track.id}%`
    //       })
    //       searchUrl = searchUrl.slice(0, -1);
    //       this.findKeyOfTracks(searchUrl);
    //     })
    //     .then( (body) => {
    //       console.log(body)
    //     })

      // request.get(options, function(error, response, body) {
      //   // console.log(body.tracks.items);
      //   let searchUrl = `https://api.spotify.com/v1/audio-features?ids=`
      //   body.tracks.items.forEach( (track) => {
      //     searchUrl += `${track.id}%`
      //   })
      //   searchUrl = searchUrl.slice(0, -1);
      //   console.log(searchUrl)
      //   let options = {
      //     url: searchUrl,
      //     headers: {
      //       'Authorization': 'Bearer ' + token
      //     },
      //     json: true
      //   };
    
      //   // request.get(options, function(error, response, body) {
      //   //   console.log(body);
      //   // });
      //   // this.findKeyOfTracks(searchUrl);
      // });

  // })},

  //takes those 20 tracks and extracts the key property
  //uses another search query with the appended ids

  findKeyOfTracks: (searchUrl) => {
      var options = {
        url: searchUrl,
        headers: {
          'Authorization': 'Bearer ' + token
        },
        json: true
      };

      request.get(options, function(error, response, body) {
        console.log(body.audio_features);
      });
  },
}
