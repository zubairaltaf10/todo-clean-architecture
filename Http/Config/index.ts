import * as dotenv from "dotenv";
dotenv.config();

import database from "./Database";
import express from "./Express";
import GoogleConfig from "./GoogleConfig";
import EmailConfig from "./Email"


export default {express,database,GoogleConfig,EmailConfig}