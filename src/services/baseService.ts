import { Router, Request, Response, NextFunction } from 'express';
import { User } from '../entities/user';
import { UserStore } from '../store/userStore';
import { httpStatus } from './constants/httpStatus';

export abstract class baseService {

    // userStore: UserStore
    static request: Request
    static response: Response;

    constructor() {
        //    this.req =  req
        //    this.res = res
    }
    static getResponse(req: Request, res: Response, next: NextFunction) {
        this.request = req
        this.response = res
        next()
    }

    public ok(res: Response, req?: Request | Request[],message?:string | {}): Response<any> {
        if (message) {
            return res.status(httpStatus.success).json(message);
        } else {
            return res.status(httpStatus.success);
        }
    }

    public created(res: Response,message: string | {}): Response<any> {
        return res.status(httpStatus.created).json(message);
    }

    public error(res: Response,err:string | {}): Response<any> {
        return res.status(httpStatus.error).json(err);
    }
}