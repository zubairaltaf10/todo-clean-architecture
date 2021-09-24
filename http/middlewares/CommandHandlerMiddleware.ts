import {
  Command,
  CommandBus,
  CommandHandlerMiddleware,
  ClassNameExtractor,
  InMemoryLocator,
  HandleInflector
} from "simple-command-bus"
import { CreateUserHandler } from "../commands/commandHandlers/CreateUserHandler";

export const commandHandlerMiddleware = new CommandHandlerMiddleware(
  new ClassNameExtractor(),
  new InMemoryLocator({ CreateUserHandler: new CreateUserHandler() }),
  new HandleInflector()
);