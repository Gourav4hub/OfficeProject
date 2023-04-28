'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('employees', [{
      name : "Abhay Jaiswal",
      phone : "9898987876",
      email : "abhay@office.com",
      type : "Admin",
      joining_date : new Date(),
      active_status : true,
      created_by  : 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
   
  }
};
