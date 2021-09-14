"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controllers/UserController"));
const auth_1 = __importDefault(require("../middlewares/auth"));
const userRouter = (0, express_1.Router)();
userRouter.post('/add', auth_1.default.validateRequiredUserBodyFields, UserController_1.default.register);
userRouter.get('/google', UserController_1.default.registerWithGoogle);
userRouter.get('/callback', UserController_1.default.googleCallback);
// userRouter.put('/:id', () => {
// })
// userRouter.delete('/:id', () => {
// })
// userRouter.post('/', () => {
// })
exports.default = userRouter;
//# sourceMappingURL=userRoutes.js.map