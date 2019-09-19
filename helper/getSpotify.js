const express = require('express');
const request = require('request');
// const rp = require('request-promise');
const axios = require('axios');
const config = require('../config.js');
// const db = require('../database/index.js');
var client_id = config.CLIENT_ID; // Your client id
var client_secret = config.CLIENT_SECRET; // Your secret

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

const save = (tracks, features, callback) => {
  let tones = ['8', '9', '10', '11', '12', '1', '2', '3', '4', '5', '6', '7'];
  let mappedData = [];
  for (let i = 0; i < tracks.length; i++) {
    mappedData.push({
      id: tracks[i].id,
      artist: tracks[i].artists[0].name,
      url: tracks[i].external_urls.spotify,
      title: tracks[i].name,
      key: tones[features[i].key],
      mode: features[i].mode,
      tempo: features[i].tempo,
      time_signature: features[i].time_signature,
      danceability: features[i].danceability
    })
  };
  callback(null, mappedData);
  // return mappedData;
}

module.exports = (term, callback) => {
  request
  .post(authOptions, function(error, response, body) {
    if (error) {
      console.error('Error in 1st authentication with Spotify API: ', error)
    } else if (!error && response.statusCode === 200) {
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
        // console.log('body: ', body);
        if (error) {
          console.error("Error getting initial song results: ", error);
        } else {
          let data = body.tracks.items;
          // console.log(body.tracks.items[0]);
          let searchUrl = `https://api.spotify.com/v1/audio-features/?ids=`
          body.tracks.items.forEach( (track) => {
            searchUrl += `${track.id},`
          })
          searchUrl = searchUrl.slice(0, -1);
          // console.log(searchUrl)
          request
            .post(authOptions, function(error, response, body) {
              if (error) {
                console.error('Error in 2nd authentication with Spotify API: ', error)
              } else if (!error && response.statusCode === 200) {
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
                      console.error('Error getting audio features: ', error);
                    } else {
                      let features = body.audio_features;
                      // callback(null, body)
                      // console.log('DATA: ', data, 'FEATURES: ', features)
                      save(data, features, callback);   
                    }
                    // console.log(body.audio_features);
                  });
              }
            })
          }
        });
      }
      
    })};
      