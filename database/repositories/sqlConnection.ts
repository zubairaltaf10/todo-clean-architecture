import { Sequelize } from 'sequelize'

const config = require('./config.json')

const dbConfig = config['development']
const sequelize = new Sequelize(
  dbConfig['database'],
  dbConfig['username'],
  dbConfig['password'],
  dbConfig 
  )

export default sequelize
