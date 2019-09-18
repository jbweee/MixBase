const express = require('express');
const request = require('request');
// const rp = require('request-promise');
const axios = require('axios');
const config = require('../config.js');
// const db = require('../database/index.js');
var client_id = config.CLIENT_ID; // Your client id
var client_secret = config.CLIENT_SECRET; // Your secret
console.log(client_id, client_secret)

// application requests authorization
var authOptions = {
  // method: 'post',
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
  // responseType: 'json'
};

module.exports = (term, callback) => {
  request
  .post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      // use the access token to access the Spotify Web API
      var token = body.access_token;
      let options = {
        url: `https://api.spotify.com/v1/search?q=${term}&type=track&limit=10`,
        headers: {
          'Authorization': 'Bearer ' + token
        },
        json: true
      };
      request
      .get(options, function(error, res, body) {
        console.log(body);
        if (error) {
          console.log("Error obtaining data from API");
        } else {
          let data = body.tracks.items;
          console.log(body.tracks.items[0]);
          let searchUrl = `https://api.spotify.com/v1/audio-features/?ids=`
          body.tracks.items.forEach( (track) => {
            searchUrl += `${track.id},`
          })
          searchUrl = searchUrl.slice(0, -1);
          console.log(searchUrl)
          request
            .post(authOptions, function(error, response, body) {
              if (!error && response.statusCode === 200) {
                var token = body.access_token;
                let options = {
                  url: searchUrl,
                  headers: {
                    'Authorization': 'Bearer ' + token
                  },
                  json: true
                };
                request
                  .get(options, function(error, response, body) {
                    if (error) {
                      console.log(error);
                    } else {
                      let features = body.audio_features;
                      // callback(null, body)
                      console.log(data, features)
                      // db.save(data, features, (err, docs) => {
                      //   if (err) {
                      //     console.error.bind(console, 'Error saving to DATABASE')
                      //   } else {
                      //     callback(null, docs);
                      //   }
                      // })   
                    }
                    console.log(body.audio_features);
                  });
              }
            })
          }
        });
      }
      
    })};
      