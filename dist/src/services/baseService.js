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
}
exports.baseService = baseService;
//# sourceMappingURL=baseService.js.map