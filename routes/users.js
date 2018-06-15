var express = require('express');
var router = express.Router();
const ensureAuthenticated = require('../auth').ensureAuthenticated;
const models = require('../models/user');

router.all('*', ensureAuthenticated);

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.json({}),
  console.log(req);
    User.findById(req.user.id)
    .then(user => {
      res.render('login', {
        bodyclass: 'login',
        //isLoggedIn: req.isAuthenticated(),
        //user: User.findById(1) 
        user: user, 
    })

    router.post('/post', (req, res, next) => {
        models.Post.create({
          title: req.body.title,
          content: req.body.content,
          UserId: 1
        })
        .then(post => {
            res.json(post);
        })
    })
  });
});

module.exports = router;
