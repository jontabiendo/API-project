'use strict';

/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcryptjs');

let options = {};
if(process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA
}

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   options.tableName = 'Users';

   await queryInterface.bulkInsert(options, [
    {
      firstName: 'Jonathan',
      lastName: 'Tabiendo',
      username: 'JonTabiendo',
      email: 'jontabiendo@gmail.com',
      hashedPassword: bcrypt.hashSync('Habidosa')
    },
    {
      firstName: 'Samuel',
      lastName: 'Tabiendo',
      username: 'IAmATrex',
      email: 'destruction_beetle@hotmail.com',
      hashedPassword: bcrypt.hashSync('CryptoMain#1')
    },
    {
      firstName: 'David',
      lastName: 'Tabiendo',
      username: 'DatTabiendo',
      email: 'blueBeetle@yahoo.com',
      hashedPassword: bcrypt.hashSync('blahblahblah')
    }
   ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Users';
    const Op = Sequelize.Op;

    return queryInterface.bulkDelete(options, {
      username: {
        [Op.in]: ['JonTabiendo', 'IAmATrex', 'DatTabiendo']
      }
    }, {})
  }
};
