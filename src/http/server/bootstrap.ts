import express from 'express'
import cors from 'cors'
import { json, urlencoded } from 'body-parser'
import { Express, Request, Response } from 'express'
import router from './routes'
import baserouter from './routes'
import sequelize from '../../../database/repositories/sqlConnection'

const app = express();

app.use(cors({
  optionsSuccessStatus: 200
}))
app.use(urlencoded({
  extended: true
}))
app.use(json())


app.use('/api', baserouter)

export default app

