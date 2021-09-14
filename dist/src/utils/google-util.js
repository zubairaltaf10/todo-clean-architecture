"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.googleUtil = void 0;
const config = require('../../database/repositories/config.json')['development'];
const axios_1 = __importDefault(require("axios"));
const queryString = __importStar(require("query-string"));
class googleUtil {
    static createUrl() {
        const stringifiedParams = queryString.stringify({
            client_id: config.google_client_id,
            redirect_uri: config.redirect_uri,
            scope: [
                'https://www.googleapis.com/auth/userinfo.email',
                'https://www.googleapis.com/auth/userinfo.profile',
            ].join(' '),
            response_type: 'code',
            access_type: 'offline',
            prompt: 'consent',
        });
        const googleLoginUrl = `${config.auth_url}${stringifiedParams}`;
        return googleLoginUrl;
    }
    static getAccessToken(code) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data } = yield (0, axios_1.default)({
                    url: config.google_access_token_url,
                    method: 'post',
                    data: {
                        client_id: config.google_client_id,
                        client_secret: config.google_client_secret,
                        redirect_uri: config.redirect_uri,
                        grant_type: 'authorization_code',
                        code,
                    },
                });
                console.log(data); // { access_token, expires_in, token_type, refresh_token }
                //  googleAuthService.getGoogleUserInfo(data.access_token)
                if (data) {
                    let userData = yield googleUtil.getUserInfo(data.access_token);
                    return userData;
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    static getUserInfo(accessToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield (0, axios_1.default)({
                url: config.google_user_info_url,
                method: 'get',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            console.log(data); // { id, email, given_name, family_name }
            return data;
        });
    }
    ;
}
exports.googleUtil = googleUtil;
//# sourceMappingURL=google-util.js.map