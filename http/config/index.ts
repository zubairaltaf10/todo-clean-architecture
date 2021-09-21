import * as dotenv from "dotenv";
dotenv.config();

import express from "./express";
import googleConfig from "./googleConfig";
import database from './database.js'
console.log(database)
export default {express,database,googleConfig}