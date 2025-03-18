const { Sequelize } = require('sequelize');
const config = require('./config.json').development;

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  logging: console.log,
});

sequelize
  .authenticate()
  .then(() => {
    console.log('✅ Conexión exitosa con la base de datos');
  })
  .catch((err) => {
    console.error('❌ Error al conectar con la base de datos:', err);
  });

module.exports = sequelize;
