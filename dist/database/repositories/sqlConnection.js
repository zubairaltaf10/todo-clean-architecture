"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config = require('./config.json');
const dbConfig = config['development'];
const sequelize = new sequelize_1.Sequelize(dbConfig['database'], dbConfig['username'], dbConfig['password'], dbConfig);
exports.default = sequelize;
//# sourceMappingURL=sqlConnection.js.map