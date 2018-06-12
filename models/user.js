const Sequelize = require('sequelize'); //i added this
const sequelize = new Sequelize('postgres://postgres@localhost:5432/beerMe2'); //i added this

const User = sequelize.define('user', { //i added this
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    email: Sequelize.STRING,
    github_id: Sequelize.STRING
});

User.sync(); //i added this

module.exports = User;