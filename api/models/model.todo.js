//Import DataTypes
const { DataTypes } = require('sequelize');

//Import sequelize
const { sequelize } = require('../utils/database')

const Todo = sequelize.define('user', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING(10),
        defaultValue: 'active',
        allowNull: false,
    },
});

module.exports = { Todo }