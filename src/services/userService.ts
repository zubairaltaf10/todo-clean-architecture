import { Router, Request, Response, NextFunction } from 'express';
import { User } from '../entities/user';
import UserEntity from '../entities/UserEntity';
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
    async createUser(res:Response,req:Request,user: User) {
        try {
           let userData = UserEntity.create(user)
            let result = await this.userStore.addUser(userData)
            if (result) {
                return super.ok(res,null,"User created successfully");
            }
        }
        catch (error) {
            return super.error(res,error.message);
        }
    }
}
export default new userService()