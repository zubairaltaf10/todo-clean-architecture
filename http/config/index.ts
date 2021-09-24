import * as dotenv from "dotenv";
dotenv.config();

import database from "./database";
import express from "./express";
import googleConfig from "./googleConfig";


export default {express,database,googleConfig}