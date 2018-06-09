const express = require('express');
var ba = require('beeradvocate-api');
const app = express();


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/beers', function(req, res) {
    ba.beerSearch(req.query.search, function(beers) {
        res.send(beers);
    });
});

app.listen(3000, () => console.log('Beer API listening on localhost:3000/beers'))
