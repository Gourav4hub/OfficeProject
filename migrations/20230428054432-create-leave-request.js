'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('leave_request', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      days: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      start_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      request_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      leave_type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      leave_status: {
        type: Sequelize.STRING,
        allowNull: false,
        default : "Pending"
      },
      emp_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references : {
          model : "employees" , key : "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('leave_request');
  }
};