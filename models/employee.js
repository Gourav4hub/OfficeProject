'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model 
  { 
    static associate(models) {
      Employee.belongsTo(models.Employee,{
        foreignKey : 'created_by' , as : 'createdBy'
      })
    }
  }
  Employee.init({
    name: {
      type : DataTypes.STRING,
      allowNull : false,
      validate:{
        notEmpty : {msg : "Employee Name Can Not Be Empty !"},
        notNull : {msg : "Employee Name Can Not Be Null !"},
      }
    },
    phone: {
      type : DataTypes.STRING,
      allowNull : false,
      unique : true,
      validate:{
        notEmpty : {msg : "Phone Can Not Be Empty !"},
        notNull : {msg : "Phone Can Not Be Null !"},
        len: {
          args : [10,10] , 
          msg : "Wrong Phone Name Format !"
        }
      }
    },
    email: {
      type : DataTypes.STRING,
      allowNull : false,
      unique : true,
      validate:{
        notEmpty : {msg : "Email Can Not Be Empty !"},
        notNull : {msg : "Email Can Not Be Null !"},
        isEmail : {msg : "Wrong Email Format !"},
      }
    },
    type: {
      type : DataTypes.STRING,
      allowNull : false,
      validate:{
        notEmpty : {msg : "Employee Type Can Not Be Empty !"},
        notNull : {msg : "Employee Type Can Not Be Null !"},
      }
    },
    joining_date: {
      type : DataTypes.DATE,
      allowNull : false,
      validate:{
        notEmpty : {msg : "Joining Date Can Not Be Empty !"},
        notNull : {msg : "Joining Date Can Not Be Null !"},
      }
    },
    image: {
      type : DataTypes.STRING,
      allowNull : true,
      validate:{
        notEmpty : {msg : "Employee Image Can Not Be Empty !"},        
      }
    },
    active_status: {
      type : DataTypes.BOOLEAN,
      allowNull : false,
      defaultValue : false
    }
  }, {
    sequelize,
    modelName: 'Employee',
    tableName:'employees'
  });
  return Employee;
};