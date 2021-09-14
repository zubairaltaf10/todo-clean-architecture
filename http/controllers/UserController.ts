import { Router, Request, Response, NextFunction } from 'express';
import googleAuthService from '../../src/services/googleAuthService';
import  userService  from "../../src/services/userService";


class UserController {
    register(req: Request, res: Response, next: NextFunction) {
        return userService.createUser( res,req,req.body)    
    }
    googleCallback(req,res,code){
     googleAuthService.connectToGoogle(req,res)
    }
    
    registerWithGoogle(req,res){
      googleAuthService.generateUrl(req,res)
      // res.redirect('https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?access_type=offline&prompt=consent&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fplus.me%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&response_type=code&client_id=881879350263-t8dmfvgst5j6sotkh7ipjugf8tb5aqpo.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fapi%2Fuser%2Fcallback&flowName=GeneralOAuthFlow')
    }
  
}

export default new UserController()
