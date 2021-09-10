import { Router } from 'express'
import todoRouter from '../routes/todoRoutes'
import userRouter from '../routes/userRoutes'

const baserouter = Router()

baserouter.use('/user', userRouter)
baserouter.use('/todo', todoRouter)

export default baserouter