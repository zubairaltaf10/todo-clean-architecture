import { Router, Request, Response, NextFunction } from 'express';
import GoogleAuthService from '../../src/Application/Auth/GoogleAuthService';
import  userService  from "../../src/Application/User/UserService";


class UserController {

    Register(req: Request, res: Response, next: NextFunction) {
        return userService.createUser( res,req.body)    
    }
    GoogleCallback(req,res,code){
     GoogleAuthService.connectToGoogle(req,res)
    }
    
    RegisterWithGoogle(req,res){
      GoogleAuthService.generateUrl(req,res)
      // res.redirect('https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?access_type=offline&prompt=consent&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fplus.me%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&response_type=code&client_id=881879350263-t8dmfvgst5j6sotkh7ipjugf8tb5aqpo.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fapi%2Fuser%2Fcallback&flowName=GeneralOAuthFlow')
    }
  
}

export default new UserController()
