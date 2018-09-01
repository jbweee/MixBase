var controller = require('./controller.js');
var router = require('express').Router();

router
  .route('/search')
  .get(controller.search.fetch)
  .post(controller.search.post);

// router
//   .route('/saved')
//   .get(controller.saved.get)
//   .post(controller.saved.post);

module.exports = router;