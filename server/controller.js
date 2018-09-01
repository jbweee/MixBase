// var models = require('../database/models.js');
const getSpotify = require('../helper/getSpotify.js'); 

module.exports = {
  search: {
    fetch: (req, res) => {
      
    }, 

    post: (req, res) => {
      let searchTerm = req.body.searchTerm;
      getSpotify(searchTerm);
    }
  },

  // saved: {
  //   get: (req, res) => {
      
  //   }, 

  //   post: (req, res) => {

  //   }
  // }
}