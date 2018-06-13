var express = require('express');
var router = express.Router();

/* GET home page. */


router.get('/', function(req, res, next) {
  res.render('favorites', {
    title: 'BeerMe',
    bodyclass: 'favorites'
  });
});

module.exports = router;