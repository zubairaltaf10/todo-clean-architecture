const path = require('path');
const result = require('dotenv').config({ path: path.join(__dirname, '../http/server/.env') });
if (result.error) {
    throw result.error;
}
console.log(process.env.DB_NAME);
const sequelize = require('../database/repositories/sqlConnection');
// import { app } from "../http/server";
const PORT = 8080;
// app.listen(PORT, () => {
//     console.log("Server successfully started at port", PORT)
//   })
// sequelize
//   .authenticate()
//   .then(() => {
//   console.log('Connection has been established successfully.');
// })
//# sourceMappingURL=www.js.map