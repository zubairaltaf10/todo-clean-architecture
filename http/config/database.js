require('dotenv').config();


const database = {
  "development": {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: Number(process.env.DB_PORT)
  }
}

module.exports = database
