"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sqlConnection_1 = __importDefault(require("../database/repositories/sqlConnection"));
const server_1 = require("../src/http/server");
const PORT = 3000;
server_1.app.listen(PORT, () => {
    console.log("Server successfully started at port", PORT);
});
sqlConnection_1.default
    .authenticate()
    .then(() => {
    console.log('Connection has been established successfully.');
});
//# sourceMappingURL=www.js.map