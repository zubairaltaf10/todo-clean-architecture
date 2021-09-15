import * as dotenv from "dotenv";
dotenv.config();

import database from "./database";
import express from "./express";
import googleConfig from "./GoogleConfig";


export default {express,database,googleConfig}