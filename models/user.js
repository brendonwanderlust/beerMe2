const Sequelize = require('sequelize'); //added sequelize 
const sequelize = new Sequelize('postgres://postgres@localhost:3000/beerMe2'); 

const User = sequelize.define('user', {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  githubid: Sequelize.INTEGER,
});

User.sync();

module.exports = User;

// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   var User = sequelize.define('User', {
//     username: DataTypes.STRING,
//     password: DataTypes.STRING,
//     email: DataTypes.STRING,
//     github_id: DataTypes.STRING
//   }, {});
//   User.associate = function(models) {
//     // associations can be defined here
//     User.hasMany(models.Beer);
//     User.hasMany(models.Brewery);
//   };
//   return User;
// };

