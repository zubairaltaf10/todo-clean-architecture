import { Command } from "simple-command-bus"
import { UniqueEntityID } from "../../../src/Application/Utils/UniqueEntityId";
import { User } from "../../../src/Domain/Entities/User/User";

export class CreateUserCommand extends Command {

  user: User
  id: UniqueEntityID
  name: string
  email: string
  password: string

  constructor(user) {
    super();
    this.id = user.id
    this.name = user.name
    this.email = user.email
    this.password = user.password
  }
}