const Sequelize = require('sequelize'); //i added this
const sequelize = new Sequelize('postgres://postgres@localhost:5432/beerMe2'); //i added this

const FavoriteBreweries = sequelize.define('favoriteBrewery', { //i added this
    breweryName: Sequelize.STRING,
    
});

FavoriteBreweries.sync(); //i added this

module.exports = FavoriteBreweries;