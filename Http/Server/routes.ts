import { Router } from 'express'
import todoRouter from '../Routes/TodoRoutes'
import userRouter from '../Routes/UserRoutes'

const baserouter = Router()

baserouter.use('/user', userRouter)
baserouter.use('/todo', todoRouter)

export default baserouter