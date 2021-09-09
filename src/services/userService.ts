import { Router, Request, Response, NextFunction } from 'express';
import { User } from '../entities/user';
import { UserStore } from '../store/userStore';
import { baseService } from './baseService';

class userService extends baseService {

    userStore: UserStore
    // req:Request
    // res:Response
    constructor() {
        super()
        this.userStore = new UserStore()
        // this.req =  req
        // this.res = res
    }
    async createUser(user: User) {
        try {
            let result = await this.userStore.addUser(user)
            if (result) {
              return baseService.res.status(200).json(result);

            }
        }
        catch (error) {
            baseService.res.status(200).send(error.message);
        }
    }
}
export default new userService()