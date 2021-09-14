import sequelize from "../src/database/repositories/sqlConnection";
import { app } from "../http/server";
import config from '../http/config/index'
const { express : { express_port } } = config

app.listen(express_port, () => {
  console.log("Server successfully started at port", express_port)
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err)=>{
    console.log(err)
  })
