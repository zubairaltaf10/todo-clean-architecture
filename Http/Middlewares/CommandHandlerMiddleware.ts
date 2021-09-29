import {
  Command,
  CommandBus,
  CommandHandlerMiddleware,
  ClassNameExtractor,
  InMemoryLocator,
  HandleInflector
} from "simple-command-bus"
import { CreateUserHandler } from "../Commands/CommandHandlers/EmailUserHandler";

export const commandHandlerMiddleware = new CommandHandlerMiddleware(
  new ClassNameExtractor(),
  new InMemoryLocator({ CreateUserHandler: new CreateUserHandler() }),
  new HandleInflector()
);