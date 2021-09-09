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
    createTodo(todo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield this.todoStore.addTodo(todo);
                if (result) {
                    return baseService_1.baseService.res.status(200).json(result);
                }
            }
            catch (error) {
                baseService_1.baseService.res.status(200).send(error.message);
            }
        });
    }
}
exports.default = new todoService();
//# sourceMappingURL=todoService.js.map