import sequelize from "../src/infrastructure/database/SqlConnection";
import { app } from "../http/server";
import config from '../http/config/index'
const { express: { EXPRESS_PORT } } = config
import {
  Command,
  CommandBus
} from "simple-command-bus"
import { commandHandlerMiddleware } from "../http/middlewares/CommandHandlerMiddleware";

app.listen(EXPRESS_PORT, () => {
  console.log("Server successfully started at port", EXPRESS_PORT)
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.log(err)
  })

export const commandBus = new CommandBus([
  commandHandlerMiddleware
]);

