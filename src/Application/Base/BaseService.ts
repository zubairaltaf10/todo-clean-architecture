import { Router, Request, Response, NextFunction } from 'express';
import { httpStatus } from '../Utils/HttpStatus';

export abstract class BaseService {

    static request: Request
    static response: Response;

    static getResponse(req: Request, res: Response, next: NextFunction) {
        this.request = req
        this.response = res
        next()
    }

    public ok(res: Response,data:{} | [],message?:string | {}): Response<any> {
        if (!data) {
            return res.status(httpStatus.success);

        } 
        return res.status(httpStatus.success).json({data,message});
    }

    public created(res: Response,status:number | string = 200,message: string | {}, data : {} | []): Response<any> {
        return res.status(httpStatus.created).json({status,message,data});
    }

    public error(res: Response,err:string | {}): Response<any> {
        return res.status(httpStatus.error).json(err);
    }

    public redirect(res: Response,url:string): Response<any> {
        return res.redirect(url);
    }

}