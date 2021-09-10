"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoRepository = void 0;
const todo_1 = require("../models/todo");
class TodoRepository {
    createTodo(todo) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield todo_1.TodoModel.create(todo);
            return response;
        });
    }
    getTodo(req) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield todo_1.TodoModel.findOne({
                where: { id: req }
            });
            return response;
        });
    }
    deleteTodo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield todo_1.TodoModel.destroy({
                where: { id }
            });
            return response;
        });
    }
}
exports.TodoRepository = TodoRepository;
//# sourceMappingURL=todoRepository.js.map