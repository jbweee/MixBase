const getSpotify = require('../helper/getSpotify.js'); 
const db = require('../database/index.js');
const config = require('../config.js');
var my_client_id = config.CLIENT_ID;
// var client_secret = config.CLIENT_SECRET;

module.exports = {
  search: {
    fetch: (req, res) => {
      db.Track
        .find()
        .limit(30)
        .exec( (err, tracks) => {
          if (err) {
            return res.status(404).send(err);
          }
          else {
            return res.status(200).send(tracks)
          }
        })
    }, 

    post: (req, res) => {
      let searchTerm = req.body.searchTerm;
      // var getData = async ( () => { 
      getSpotify(searchTerm, (err, data) => {
        if (err) {
          console.log('Error Posting to DB')
        } else {
          res.send(data);
        }
      });
      // });
      // getData()
      //   .then( (body)=> {
      //     console.log(body)
      //   })
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