"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todoRoutes_1 = __importDefault(require("../routes/todoRoutes"));
const userRoutes_1 = __importDefault(require("../routes/userRoutes"));
const baserouter = (0, express_1.Router)();
baserouter.use('/user', userRoutes_1.default);
baserouter.use('/todo', todoRoutes_1.default);
exports.default = baserouter;
//# sourceMappingURL=routes.js.map