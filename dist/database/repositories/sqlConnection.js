"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// const config = require('./config.json')
// const dbConfig = config['development']
const sequelize = new sequelize_1.Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: 3306,
    dialect: "mysql",
});
exports.default = sequelize;
//# sourceMappingURL=sqlConnection.js.map