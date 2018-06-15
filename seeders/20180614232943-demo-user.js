let sequelize = require('sequelize');

'use strict';



module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Users', [{
        username: 'JohnDoe',
        password: 'beerme',
        email: 'user@gmail.com',
        github_id: 'brendonwanderlust',
        createdAt: sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: sequelize.literal('CURRENT_TIMESTAMP')
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Person', null, {});

  }
};
