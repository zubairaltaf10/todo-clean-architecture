import path from 'path'
import * as dotenv from "dotenv";
dotenv.config({ path: path.join(__dirname, '../server/.env')});

export default {
"express_port" : process.env.EXPRESS_PORT
}