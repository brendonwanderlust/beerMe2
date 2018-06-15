'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Users', [{
        username: 'JohnDoe',
        password: 'beerme',
        email: 'user@gmail.com',
        github_id: 'brendonwanderlust'
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Person', null, {});

  }
};
