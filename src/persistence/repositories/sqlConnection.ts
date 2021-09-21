import { Sequelize } from 'sequelize'
import config from '../../../http/config/index'
const {database} = config
console.log(database.database)
const sequelize = new Sequelize(
  database['development'].database,
  database['development'].username,
  database['development'].password,
  {
    host: database['development'].host,
    port: database['development'].port,
    dialect: "mysql",
  },
);

export default sequelize
