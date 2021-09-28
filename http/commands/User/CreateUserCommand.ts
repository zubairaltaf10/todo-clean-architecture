import { Command } from "simple-command-bus"
import { UniqueEntityID } from "../../../src/application/utils/UniqueEntityId";
import { User } from "../../../src/domain/Entities/User/user";

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