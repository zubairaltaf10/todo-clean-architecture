import { Sequelize } from 'sequelize'

// const config = require('./config.json')

// const dbConfig = config['development']
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: 3306,
    dialect: "mysql",
  },
);

export default sequelize
