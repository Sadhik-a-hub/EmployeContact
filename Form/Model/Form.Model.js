const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
  "mysql://root:sadhik@localhost:3306/Employee_Details"
);

const Form = sequelize.define(
  "Form",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    Phno: {
      type: DataTypes.STRING(12),
        allowNull: false,
        unique:true,
      
    },
    Gender: {
      type: DataTypes.ENUM,
      values: ["male", "female", "others"],
    },
    Department: {
      type: DataTypes.ENUM,
      values:['HR', 'Engineering', 'Marketing', 'Sales']
    },
    JoiningDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    Status: {
      type: DataTypes.ENUM,
      values: ["active", "inactive"],
    },
    Salary: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Address: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    Emp_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = { sequelize, Form };