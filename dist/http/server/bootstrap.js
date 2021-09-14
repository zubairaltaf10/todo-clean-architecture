"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = require("body-parser");
const routes_1 = __importDefault(require("./routes"));
const path = require('path');
const app = (0, express_1.default)();
app.set('views', path.join(__dirname, '../../presentation'));
app.set('view engine', 'pug');
app.use((0, cors_1.default)({
    optionsSuccessStatus: 200
}));
app.use((0, body_parser_1.urlencoded)({
    extended: true
}));
app.use((0, body_parser_1.json)());
app.use(express_1.default.static(path.join(__dirname, '../../presentation/public/css')));
app.use('/register', (req, res) => res.render('auth/register-form'));
app.use('/api', routes_1.default);
exports.default = app;
//# sourceMappingURL=bootstrap.js.map