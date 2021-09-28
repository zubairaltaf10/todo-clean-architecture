import { Router } from 'express'
import todoRouter from '../routes/TodoRoutes'
import userRouter from '../routes/UserRoutes'

const baserouter = Router()

baserouter.use('/user', userRouter)
baserouter.use('/todo', todoRouter)

export default baserouter