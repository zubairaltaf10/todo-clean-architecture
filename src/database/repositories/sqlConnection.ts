import { Sequelize } from 'sequelize'
import config from '../../../http/config/index'
const {database} = config

const sequelize = new Sequelize(
  database.database,
  database.username,
  database.password,
  {
    host: database.host,
    port: database.port,
    dialect: "mysql",
  },
);

export default sequelize
