'use strict';
module.exports = (sequelize, DataTypes) => {
  var Brewery = sequelize.define('Brewery', {
    name: DataTypes.STRING
  }, {});
  Brewery.associate = function(models) {
    // associations can be defined here
    Brewery.belongsToMany(models.User, {
      through: "UserBreweries"
    });
  };
  return Brewery;
};