import { Router, Request, Response, NextFunction } from 'express';
import  UserStore  from '../../infrastructure/store/userStore';
import googleCredentials  from '../utils/GoogleCredentials';
import { baseService } from '../Base/baseService';
import { v4 as uuidv4 } from 'uuid';
import { IUserStore } from '../../infrastructure/store/IStore';


class googleAuthService extends baseService {

    userStore: IUserStore
    constructor() {
        super()
     
    }

    generateUrl(req,res){
        let url = googleCredentials.createUrl()
        super.redirect(res,url)
    }

    async connectToGoogle(req, res) {
        try {
            let result = await googleCredentials.getAccessToken(req.query.code)
            let alreadyExist = await this.userStore.getUserbyEmail(result.email)
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


    // static async getGoogleUserInfo(access_token) {
    //     const { data } = await axios({
    //       url: 'https://www.googleapis.com/oauth2/v2/userinfo',
    //       method: 'get',
    //       headers: {
    //         Authorization: `Bearer ${access_token}`,
    //       },
    //     });
    //     console.log(data); // { id, email, given_name, family_name }
    //     return data;
    //   };

}


export default new googleAuthService()