import { Router } from 'express'
import auth from '../middlewares/auth'
import todoRouter from '../routes/todoRoutes'
import userRouter from '../routes/userRoutes'

const baserouter = Router()

baserouter.use('/user', userRouter)
baserouter.use('/todo',auth.validateTokenMiddleware, todoRouter)

export default baserouter