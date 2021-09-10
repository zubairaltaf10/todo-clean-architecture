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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todoService_1 = __importDefault(require("../../services/todoService"));
class TodoController {
    constructor() {
        //  this.register = this.register.bind(this);
    }
    createTODO(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return todoService_1.default.createTodo(req.body);
        });
    }
    getTODO(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return todoService_1.default.getTodobyId(req);
        });
    }
    editTODO(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // try {
            //     await TodoModel.update(req.body,{
            //        where : {id:req.params.id}
            //    })
            //     res.status(200).send({response:"todo updated successfully"})
            // } catch (error) {
            //     res.status(400).send(error)
            // }
        });
    }
    deleteTODO(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            return todoService_1.default.deleteTodo(req);
        });
    }
}
exports.default = new TodoController;
//# sourceMappingURL=TodoController.js.map