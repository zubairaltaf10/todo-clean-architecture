"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseService = void 0;
const httpStatus_1 = require("./constants/httpStatus");
class baseService {
    constructor() {
        //    this.req =  req
        //    this.res = res
    }
    static getResponse(req, res, next) {
        this.request = req;
        this.response = res;
        next();
    }
    ok(res, req, message) {
        if (message) {
            return res.status(httpStatus_1.httpStatus.success).json(message);
        }
        else {
            return res.status(httpStatus_1.httpStatus.success);
        }
    }
    created(res, message) {
        return res.status(httpStatus_1.httpStatus.created).json(message);
    }
    error(res, err) {
        return res.status(httpStatus_1.httpStatus.error).json(err);
    }
    redirect(res, url) {
        return res.redirect(url);
    }
}
exports.baseService = baseService;
//# sourceMappingURL=baseService.js.map