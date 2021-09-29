import { Sequelize } from 'sequelize'
import config from '../../../Http/Config/index'
const {database} = config

const sequelize = new Sequelize(
  database.DB_NAME,
  database.DB_USERNAME,
  database.DB_PASSWORD,
  {
    host: database.DB_HOST,
    port: database.DB_PORT,
    dialect: "mysql",
  },
);

export default sequelize
