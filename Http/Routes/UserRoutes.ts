import { Router } from 'express'
import UserController from '../Controllers/UserController';
import UsersMiddleware from '../Middlewares/Auth'

const userRouter = Router();


userRouter.post('/add',UsersMiddleware.validateRequiredUserBodyFields, UserController.register)
userRouter.get('/google', UserController.registerWithGoogle)
userRouter.get('/callback', UserController.googleCallback)

export default userRouter