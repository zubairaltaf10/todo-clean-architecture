const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../http/server/.env')});

import sequelize from "../database/repositories/sqlConnection";
import { app } from "../http/server";

const PORT = 8080

app.listen(PORT, () => {
    console.log("Server successfully started at port", PORT)
  })

sequelize
  .authenticate()
  .then(() => {
  console.log('Connection has been established successfully.');
})
