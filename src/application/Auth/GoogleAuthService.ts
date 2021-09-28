import { Router, Request, Response, NextFunction } from 'express';
import  UserStore  from '../../infrastructure/store/UserStore';
import googleCredentials  from '../utils/GoogleCredentials';
import { BaseService } from '../Base/BaseService';
import { v4 as uuidv4 } from 'uuid';
import { IUserStore } from '../../infrastructure/store/IStore';

class GoogleAuthService extends BaseService {

    userStore: IUserStore
    constructor() {
        super()
     
    }

    generateUrl(req,res){
        const url = googleCredentials.createUrl()
        super.redirect(res,url)
    }

    async connectToGoogle(req, res) {
        try {
            const result = await googleCredentials.getAccessToken(req.query.code)
            const alreadyExist = await this.userStore.getUserbyEmail(result.email)
            if (result && !alreadyExist) {
                this.userStore.addUser({
                    id: uuidv4(),
                    name: result.name,
                    email: result.email,
                    password: null
                })
            }
            else {
                return super.error(res, "User already exists");
            }
            return super.ok(res, "User successfully created");
        }
        catch (error) {
            return super.error(res, error.message);
        }
    }

}


export default new GoogleAuthService()