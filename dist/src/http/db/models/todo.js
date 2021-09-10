"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoModel = void 0;
const sequelize_1 = require("sequelize");
const sqlConnection_1 = __importDefault(require("../../../../database/repositories/sqlConnection"));
class TodoModel extends sequelize_1.Model {
}
exports.TodoModel = TodoModel;
TodoModel.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: false,
    sequelize: sqlConnection_1.default,
    paranoid: true,
    modelName: 'todos'
});
//# sourceMappingURL=todo.js.map