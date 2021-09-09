import express from 'express'
import cors from 'cors'
import { json, urlencoded } from 'body-parser'
import { Express, Request, Response } from 'express'
import router from './routes'
import baserouter from './routes'
import { UserModel } from '../db/models/user'
import { baseService } from '../../services/baseService'


const PORT: number = 3000

/**
 * Root class of your node server.
 * Can be used for basic configurations, for instance starting up the server or registering middleware.
 */
export class Server {

  private app: Express

  constructor() {
    this.app = express()

    // Express middleware
    this.app.use(cors({
      optionsSuccessStatus: 200
    }))
    this.app.use(urlencoded({
      extended: true
    }))
    this.app.use(json())
   

    this.app.listen(PORT, () => {
      console.log("Server successfully started at port", PORT)
    })
    
    this.app.get('/', (req: Request, res: Response) => res.status(200).send({
      message: 'server is running!'
    }))
    this.app.use((req: Request, res: Response,next) =>{ baseService.getResponse(req,res,next)})
    this.app.use('/api', baserouter)
   
    const db = require("../db/models")
    db.sequelize.sync({ force: true }).then(() => {
      console.log("Drop and re-sync db.");
    });
    //  this.app.use('/',(Request)=>)
    // routes.initRoutes(this.app)
  }
}
new Server()
