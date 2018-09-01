const express = require('express');
const request = require('request');
const rp = require('request-promise');
const config = require('../config.js');
const db = require('../database/index.js');
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

///////////////////////////////////////////////////////////
//takes those 20 tracks and extracts the key property
//uses another search query with the appended ids
// var findKeyOfTracks = (searchUrl) => {
//   let options = {
//     url: searchUrl,
//     headers: {
//       'Authorization': 'Bearer ' + token
//     },
//     json: true
//   };
//   request.get(options, function(error, response, body) {
//     console.log(body);
//     // console.log(body.audio_features);
//   });
// };
////////////////////////////////////////////////////////////

//finds 20 tracks with the specified search query
var token;

module.exports = (term) => {request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {

    // use the access token to access the Spotify Web API
    token = body.access_token;
    let options = {
      url: `https://api.spotify.com/v1/search?q=name:${term}&type=track&limit=20`,
      headers: {
        'Authorization': 'Bearer ' + token
      },
      json: true
    };
    request.get(options, function(error, response, body) {
      // console.log(body);
      if (error) {
        console.log("Error obtaining data from API");
      } else {
        let data = JSON.parse(body);
        console.log(data);
        db.save(body, (err, docs) => {
          if (err) {
            console.log(err);
          } else {
            response.send();
          }
        })
      }
    });
    // rp(options)
    //   .then((body) => {
    //     console.log(body.tracks.items)
    //     return body.tracks.items;
    //     //////////////////////////////////////////////////////////////////
    //     // let searchUrl = `https://api.spotify.com/v1/audio-features?ids=`
    //     // body.tracks.items.forEach( (track) => {
    //     //   searchUrl += `${track.id}%`
    //     // })
    //     // searchUrl = searchUrl.slice(0, -1);

    //     // findKeyOfTracks(searchUrl);
    //     ///////////////////////////////////////////////////////////////////
    //   })
    //   .catch((err) => {
    //     console.error('Unable to get tracks')
    //   })
  }
})};

