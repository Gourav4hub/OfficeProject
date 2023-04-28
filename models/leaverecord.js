'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LeaveRecord extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      LeaveRecord.belongsTo(models.Employee,{
        foreignKey : 'emp_id' , as : 'employee'
      })
      LeaveRecord.belongsTo(models.LeaveRequest,{
        foreignKey : 'leave_req_id' , as : 'request'
      })
      LeaveRecord.belongsTo(models.Employee,{
        foreignKey : 'approve_by' , as : 'approveBy'
      })
    }
  }
  LeaveRecord.init({
    days: {
      type : DataTypes.FLOAT,
      allowNull : false,
      validate:{
        notEmpty : {msg : "Days Can Not Be Empty !"},
        notNull : {msg : "Days Can Not Be Null !"},
        isNumeric : {msg : "Days Always Be Numeric !"},
      }
    },
    start_date:{
      type : DataTypes.DATE,
      allowNull : false,
      validate:{
        notEmpty : {msg : "Start Date Can Not Be Empty !"},
        notNull : {msg : "Start Date Can Not Be Null !"},
      }
    },
    approve_date: {
      type : DataTypes.DATE,
      allowNull : false,
      defaultValue : new Date()
    }
  }, {
    sequelize,
    modelName: 'LeaveRecord',
    tableName:'leave_record'
  });
  return LeaveRecord;
};