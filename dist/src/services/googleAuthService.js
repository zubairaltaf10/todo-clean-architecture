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
const google_util_1 = require("../utils/google-util");
const baseService_1 = require("./baseService");
const uuid_1 = require("uuid");
class googleAuthService extends baseService_1.baseService {
    // req:Request
    // res:Response
    constructor() {
        super();
        this.userStore = new userStore_1.UserStore();
    }
    generateUrl(req, res) {
        let url = google_util_1.googleUtil.createUrl();
        super.redirect(res, url);
    }
    connectToGoogle(req, res) {
        const _super = Object.create(null, {
            error: { get: () => super.error },
            ok: { get: () => super.ok }
        });
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield google_util_1.googleUtil.getAccessToken(req.query.code);
                let alreadyExist = yield this.userStore.getUserbyEmail(result.email);
                if (result && !alreadyExist) {
                    this.userStore.addUser({
                        id: (0, uuid_1.v4)(),
                        name: result.name,
                        email: result.email,
                        password: null
                    });
                }
                else {
                    return _super.error.call(this, res, "User already exists");
                }
                return _super.ok.call(this, res, "User successfully created");
            }
            catch (error) {
                return _super.error.call(this, res, error.message);
            }
        });
    }
}
exports.default = new googleAuthService();
//# sourceMappingURL=googleAuthService.js.map