"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoStore = void 0;
const todoRepository_1 = require("../../database/repositories/todoRepository");
class todoStore {
    constructor() {
        this.repository = new todoRepository_1.TodoRepository();
    }
    getTodoByNameOrId(id, email) {
        throw new Error("Method not implemented.");
    }
    addTodo(request) {
        return this.repository.createTodo(request);
    }
    deleteTodo(id) {
        throw new Error("Method not implemented.");
    }
    getAllTodos() {
        throw new Error("Method not implemented.");
    }
}
exports.todoStore = todoStore;
//# sourceMappingURL=todoStore.js.map