const getSpotify = require('../helper/getSpotify.js'); 
const db = require('../database/index.js');

module.exports = {
  search: {
    fetch: (req, res) => {
      db.Track
        .find()
        .limit(20)
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

  // saved: {
  //   get: (req, res) => {
      
  //   }, 

  //   post: (req, res) => {

  //   }
  // }
}