const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const User = db.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false, //nao pode ser nulo
        require: true, // é requerido
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    },
})

module.exports = User 