const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('toughts', 'root', 'Iannakamura21', {
    host: 'localhost',
    dialect: 'mysql',
})

try {
    sequelize.authenticate()
    console.log('conectamos com sucesso!')
} catch (error) {
    console.log`Erro, não foi possível conectar ao banco de dados: ${err}`
}

module.exports = sequelize