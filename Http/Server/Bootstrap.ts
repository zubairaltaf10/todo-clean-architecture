import express from 'express'
import cors from 'cors'
import { json, urlencoded } from 'body-parser'
import baserouter from './Routes'
const path = require('path');

const app = express();


app.set('views', path.join(__dirname, '../../presentation'));
app.set('view engine', 'pug');

app.use(cors({
  optionsSuccessStatus: 200
}))
app.use(urlencoded({
  extended: true
}))
app.use(json())

app.use(express.static(path.join(__dirname,'../../presentation/public/css')));

app.use('/register',(req,res)=>res.render('auth/register-form'))

app.use('/api', baserouter)


export default app

