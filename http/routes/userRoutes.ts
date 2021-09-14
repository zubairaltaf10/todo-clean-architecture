import { Router,Request,Response } from 'express'
import UserController from '../controllers/UserController';
import UsersMiddleware from '../middlewares/auth'
const userRouter = Router();


userRouter.post('/add',UsersMiddleware.validateRequiredUserBodyFields, UserController.register)
userRouter.get('/google', UserController.registerWithGoogle)
userRouter.get('/callback', UserController.googleCallback)


// userRouter.put('/:id', () => {
// })
// userRouter.delete('/:id', () => {
// })
// userRouter.post('/', () => {
// })

export default userRouter