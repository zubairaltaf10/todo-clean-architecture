"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseService = void 0;
class baseService {
    constructor() {
        //    this.req =  req
        //    this.res = res
    }
    static getResponse(req, res, next) {
        this.req = req;
        this.res = res;
        next();
    }
    ok(res, req) {
        if (req) {
            return res.status(httpStatus.success).json(req.body);
        }
        else {
            return res.sendStatus(httpStatus.success);
        }
    }
    created(res) {
        return res.sendStatus(httpStatus.created);
    }
    error(res, err) {
        return res.sendStatus(httpStatus.error).json(err);
    }
}
exports.baseService = baseService;
//# sourceMappingURL=baseService.js.map