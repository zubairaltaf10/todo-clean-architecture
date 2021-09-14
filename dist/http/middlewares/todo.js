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
class TodoMiddleware {
    validateRequiredTodoBodyField(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body && req.body.title) {
                next();
            }
            else {
                res.status(400).send({ error: `Missing required fields` });
            }
        });
    }
    validateParamsTodo(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.params.id) {
                next();
            }
            else {
                res.status(400).send({ error: `Missing required params ID` });
            }
        });
    }
    validateEditTodo(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body && req.params.id) {
                next();
            }
            else {
                res.status(400).send({ error: `Missing required fields` });
            }
        });
    }
}
exports.default = new TodoMiddleware();
//# sourceMappingURL=todo.js.map