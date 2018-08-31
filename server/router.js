var controller = require('./controller.js');
var router = require('express').Router();

router.get = ('/search', controller.search.get);

router.post = ('/search', controller.search.post);

// router.get = ('/saved', controller.saved.get);

// router.post = ('/saved', controller.saved.post);

module.exports = router;