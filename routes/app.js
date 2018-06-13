var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('app', {
    title: 'BeerMe',
    bodyclass: 'app'
  });
});

router.get('/favorites', function(req, res, next) {
  res.render('favorites', {
    body: 'app'
  });
});

module.exports = router;
