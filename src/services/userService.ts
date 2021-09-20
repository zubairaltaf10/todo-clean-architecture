import { Router, Request, Response, NextFunction } from 'express';
import { User } from '../entities/user';
import UserEntity from '../entities/UserEntity';
import { UserStore } from '../store/userStore';
import { createJWT } from '../utils/CreateJWT';
import { baseService } from './baseService';

class userService extends baseService {

    userStore: UserStore

    constructor() {
        super()
        this.userStore = new UserStore()
    }

    async createUser(res:Response,req:Request,user: User) {
        try {
            let token = createJWT(req.body.name)
           const userEntity = UserEntity.create(user)
            const result = await this.userStore.addUser(userEntity)
            if (result) {
                return super.created(res,"success",result,"User created successfully");
            }
        }
        catch (error) {
            return super.error(res,error.message);
        }
    }
}
export default new userService()