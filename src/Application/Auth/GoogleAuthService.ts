import { Router, Request, Response, NextFunction } from 'express';
import UserStore from '../../Infrastructure/Database/Store/UserStore';
import googleCredentials from '../Utils/GoogleCredentials';
import { BaseService } from '../Base/BaseService';
import { v4 as uuidv4 } from 'uuid';
import { IUserStore } from '../../Infrastructure/Database/Store/IStore';

class GoogleAuthService extends BaseService {

    userStore: IUserStore
    constructor() {
        super()
    }

    generateUrl(req, res) {
        const url = googleCredentials.createUrl()
        super.redirect(res, url)
    }

    async connectToGoogle(req, res) {
        try {
            const result = await googleCredentials.getAccessToken(req.query.code)
            const userExist = await this.userStore.getUserbyEmail(result.email)
            if (result && userExist) {
                return super.error(res, "User already exists");
            }
            
            await this.userStore.addUser({
                id: uuidv4(),
                name: result.name,
                email: result.email,
                password: null
            })
            return super.ok(res, "User successfully created");
        }
        catch (error) {
            return super.error(res, error.message);
        }
    }

}


export default new GoogleAuthService()