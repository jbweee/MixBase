// var models = require('../database/models.js');
const getSpotify = require('../helper/getSpotify.js'); 

module.exports = {
  search: {
    fetch: (req, res) => {
      
    }, 

    post: (req, res) => {
      getSpotify(req.body.searchTerm);
    }
  },

  // saved: {
  //   get: (req, res) => {
      
  //   }, 

  //   post: (req, res) => {

  //   }
  // }
}