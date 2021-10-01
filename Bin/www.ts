import sequelize from "../src/Infrastructure/Database/SqlConnection";
import { app } from "../Http/Server";
import config from '../Http/Config/index'
const { express: { EXPRESS_PORT } } = config
import {
  Command,
  CommandBus
} from "simple-command-bus"
import { commandHandlerMiddleware } from "../Http/Middlewares/CommandHandlerMiddleware";

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

