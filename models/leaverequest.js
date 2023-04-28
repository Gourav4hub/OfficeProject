'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LeaveRequest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      LeaveRequest.belongsTo(models.Employee,{
        foreignKey : 'emp_id' , as : 'employee'
      })
    }
  }
  LeaveRequest.init({
    description: {
      type : DataTypes.STRING,
      allowNull : false,
      validate:{
        notEmpty : {msg : "Description Can Not Be Empty !"},
        notNull : {msg : "Description Can Not Be Null !"},
      }
    },
    days: {
      type : DataTypes.FLOAT,
      allowNull : false,
      validate:{
        notEmpty : {msg : "Days Can Not Be Empty !"},
        notNull : {msg : "Days Can Not Be Null !"},
        isNumeric : {msg : "Days Always Be Numeric !"},
      }
    },
    start_date: {
      type : DataTypes.DATE,
      allowNull : false,
      validate:{
        notEmpty : {msg : "Start Date Can Not Be Empty !"},
        notNull : {msg : "Start Date Can Not Be Null !"},
      }
    },
    request_date: {
      type : DataTypes.DATE,
      allowNull : false,
      defaultValue : new Date()
    },
    leave_type: {
      type : DataTypes.STRING,
      allowNull : false,
      validate:{
        notEmpty : {msg : "Leave Type Can Not Be Empty !"},
        notNull : {msg : "Leave Type Can Not Be Null !"},
      }
    },
    leave_status: {
      type : DataTypes.STRING,
      allowNull : false,
      defaultValue : "Pending"
    }
  }, {
    sequelize,
    modelName: 'LeaveRequest',
    tableName:'leave_request'
  });
  return LeaveRequest;
};