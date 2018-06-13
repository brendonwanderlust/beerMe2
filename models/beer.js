'use strict';
module.exports = (sequelize, DataTypes) => {
  var Beer = sequelize.define('Beer', {
    name: DataTypes.STRING
  }, {});
  Beer.associate = function(models) {
    // associations can be defined here
    Beer.belongsToMany(models.User, {
      through: "UserBeers"
    });
  };
  return Beer;
};