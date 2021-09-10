import sequelize from "../database/repositories/sqlConnection";
import { app, baserouter } from "../src/http/server";
import { baseService } from "../src/services/baseService";

const PORT = 3000
app.listen(PORT, () => {
    console.log("Server successfully started at port", PORT)
  })

sequelize
  .authenticate()
  .then(() => {
  console.log('Connection has been established successfully.');
})
