var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cup', { title: 'search results for cup' });
});

module.exports = router;