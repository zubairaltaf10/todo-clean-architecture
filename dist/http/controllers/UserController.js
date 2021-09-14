"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const googleAuthService_1 = __importDefault(require("../../src/services/googleAuthService"));
const userService_1 = __importDefault(require("../../src/services/userService"));
class UserController {
    register(req, res, next) {
        return userService_1.default.createUser(res, req, req.body);
    }
    googleCallback(req, res, code) {
        googleAuthService_1.default.connectToGoogle(req, res);
    }
    registerWithGoogle(req, res) {
        googleAuthService_1.default.generateUrl(req, res);
        // res.redirect('https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?access_type=offline&prompt=consent&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fplus.me%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&response_type=code&client_id=881879350263-t8dmfvgst5j6sotkh7ipjugf8tb5aqpo.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fapi%2Fuser%2Fcallback&flowName=GeneralOAuthFlow')
    }
}
exports.default = new UserController();
//# sourceMappingURL=UserController.js.map