import { Router,Request,Response } from 'express'
import UserController from '../Controllers/UserController';
import UsersMiddleware from '../Middlewares/Auth'
const userRouter = Router();


userRouter.post('/add',UsersMiddleware.validateRequiredUserBodyFields, UserController.Register)
userRouter.get('/google', UserController.RegisterWithGoogle)
userRouter.get('/callback', UserController.GoogleCallback)

export default userRouter