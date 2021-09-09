"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../../services/userService"));
class UserController {
    register(req, res, next) {
        // let response = await UserModel.create(req.body)
        //   res.status(200).send(response)
        return userService_1.default.createUser(req.body);
    }
}
exports.default = new UserController();
//# sourceMappingURL=UserController.js.map