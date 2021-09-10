import { Router, Request, Response, NextFunction } from 'express';
import  userService  from "../../services/userService";


class UserController {
    register(req: Request, res: Response, next: NextFunction) {
      // let response = await UserModel.create(req.body)
      //   res.status(200).send(response)
        return userService.createUser( res,req,req.body)    
    }

}

export default new UserController()
