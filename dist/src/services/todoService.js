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
const todoStore_1 = require("../store/todoStore");
const baseService_1 = require("./baseService");
class todoService extends baseService_1.baseService {
    constructor() {
        super();
        this.todoStore = new todoStore_1.todoStore();
    }
    createTodo(req, res, todo) {
        const _super = Object.create(null, {
            created: { get: () => super.created },
            error: { get: () => super.error }
        });
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield this.todoStore.addTodo(todo);
                if (result) {
                    return _super.created.call(this, res, { "response": "todo created successfully" });
                }
            }
            catch (error) {
                _super.error.call(this, res, (error.message));
            }
        });
    }
    getTodobyId(res, req) {
        const _super = Object.create(null, {
            ok: { get: () => super.ok },
            error: { get: () => super.error }
        });
        return __awaiter(this, void 0, void 0, function* () {
            let todo;
            todo = yield this.todoStore.getTodo(req.params.id);
            if (todo) {
                return _super.ok.call(this, res, null, todo);
            }
            else {
                return _super.error.call(this, res, "No todo found");
            }
        });
    }
    deleteTodo(res, req) {
        const _super = Object.create(null, {
            ok: { get: () => super.ok },
            error: { get: () => super.error }
        });
        return __awaiter(this, void 0, void 0, function* () {
            let todo;
            todo = yield this.todoStore.deleteTodo(req.params.id);
            if (todo == 1) {
                return _super.ok.call(this, res, null, "todo deleted successfully");
            }
            else {
                return _super.error.call(this, res, "No todo found");
            }
        });
    }
}
exports.default = new todoService();
//# sourceMappingURL=todoService.js.map