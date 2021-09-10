"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TodoController_1 = __importDefault(require("../controllers/TodoController"));
const todo_1 = __importDefault(require("../middlewares/todo"));
const todoRouter = (0, express_1.Router)();
todoRouter.get('/:id', todo_1.default.validateParamsTodo, (req, res, next) => TodoController_1.default.getTODO(req, res, next));
todoRouter.post('/add', todo_1.default.validateRequiredTodoBodyField, (req, res, next) => TodoController_1.default.createTODO(req, res, next));
todoRouter.put('/:id', todo_1.default.validateEditTodo, (req, res, next) => TodoController_1.default.editTODO(req, res, next));
todoRouter.delete('/:id', todo_1.default.validateParamsTodo, (req, res, next) => TodoController_1.default.deleteTODO(req, res, next));
exports.default = todoRouter;
//# sourceMappingURL=todoRoutes.js.map