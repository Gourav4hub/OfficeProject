'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      joining_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      active_status: {
        type: Sequelize.BOOLEAN,
        default : false
      },
      created_by: {
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
    await queryInterface.dropTable('employees');
  }
};