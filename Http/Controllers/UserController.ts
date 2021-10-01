import { Router, Request, Response, NextFunction } from 'express';
import GoogleAuthService from '../../src/Application/Auth/GoogleAuthService';
import  UserService  from "../../src/Application/User/UserService";


class UserController {

    register(req: Request, res: Response, next: NextFunction) {
        return UserService.createUser( res,req.body)    
    }
    googleCallback(req,res,code){
     GoogleAuthService.connectToGoogle(req,res)
    }
    
    registerWithGoogle(req,res){
      GoogleAuthService.generateUrl(req,res)
    }
  
}

export default new UserController()
