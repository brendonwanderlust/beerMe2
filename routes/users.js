var express = require('express');
var router = express.Router();
const ensureAuthenticated = require('../auth').ensureAuthenticated();
const User = require('../models/user');

router.all('*', ensureAuthenticated);

/* GET users listing. */
router.get('/login', function(req, res, next) {
    User.findById(req.user)
    .then(user => {
      res.render('login', {
        bodyclass: 'login',
        isLoggedIn: req.isAuthenticated(),
        user: User.findById(1)  
    })
  });
});

module.exports = router;
