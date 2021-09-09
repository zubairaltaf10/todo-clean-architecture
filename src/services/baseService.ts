import { Router, Request, Response, NextFunction } from 'express';
import { User } from '../entities/user';
import { UserStore } from '../store/userStore';

export class baseService {

    // userStore: UserStore
    static req: Request
    static res: Response;

    constructor() {
        //    this.req =  req
        //    this.res = res
    }
    static getResponse(req: Request, res: Response, next: NextFunction) {
        this.req = req
        this.res = res
        next()
    }
}