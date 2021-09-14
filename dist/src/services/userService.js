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
const userStore_1 = require("../store/userStore");
const baseService_1 = require("./baseService");
class userService extends baseService_1.baseService {
    // req:Request
    // res:Response
    constructor() {
        super();
        this.userStore = new userStore_1.UserStore();
        // this.req =  req
        // this.res = res
    }
    createUser(res, req, user) {
        const _super = Object.create(null, {
            ok: { get: () => super.ok },
            error: { get: () => super.error }
        });
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield this.userStore.addUser(user);
                if (result) {
                    return _super.ok.call(this, res, null, "User created successfully");
                }
            }
            catch (error) {
                return _super.error.call(this, res, error.message);
            }
        });
    }
}
exports.default = new userService();
//# sourceMappingURL=userService.js.map