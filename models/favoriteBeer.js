const Sequelize = require('sequelize'); //i added this
const sequelize = new Sequelize('postgres://postgres@localhost:5432/beerMe2'); //i added this

const FavoriteBeers = sequelize.define('favoriteBeer', { //i added this
    beerName: Sequelize.STRING,
    
});

FavoriteBeers.sync(); //i added this

module.exports = FavoriteBeers;