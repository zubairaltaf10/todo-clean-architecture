import sequelize from "../src/persistence/repositories/sqlConnection";
import { app } from "../http/server";
import config from '../http/config/index'
const { express: { express_port } } = config
import {
  Command,
  CommandBus
} from "simple-command-bus"
import { CreateUserHandler } from "../http/commands/commandHandlers/CreateUserHandler";
import { commandHandlerMiddleware } from "../http/middlewares/CommandHandlerMiddleware";
import { CreateUserCommand } from "../http/commands/CreateUserCommand";

app.listen(express_port, () => {
  console.log("Server successfully started at port", express_port)
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.log(err)
  })
//   var commandHandlerMiddleware = new CommandHandlerMiddleware(
//     new ClassNameExtractor(),
//     new InMemoryLocator({ CreateUserHandler: new CreateUserHandler() }),
//     new HandleInflector()
// );

// // Command bus instance
// var commandBus = new CommandBus(
//     commandHandlerMiddleware
// );

// const createAccountCommand = new CreateUserCommand('John', 'Doe','dsadsa');
// var result = commandBus. handle(createAccountCommand);
// console.log('Result:', result);
// export default commandBus
// class CreateUserCommand extends Command {
//   firstName
//   lastName
//   constructor(firstName, lastName) {
//       super();
//       this.firstName = firstName;
//       this.lastName = lastName;
//   }
// }

// Command bus instance
export const commandBus = new CommandBus([
  commandHandlerMiddleware
]);

