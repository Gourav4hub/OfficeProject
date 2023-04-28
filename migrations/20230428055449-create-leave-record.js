'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('leave_record', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      days: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      start_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      approve_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      emp_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references : {
          model : "employees" , key : "id"
        }
      },
      leave_req_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references : {
          model : "leave_request" , key : "id"
        }
      },
      approve_by:{
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
    await queryInterface.dropTable('leave_record');
  }
};