import {Command} from "simple-command-bus"
import { User } from "../../src/Domain/Entities/User/user";

export class CreateUserCommand extends Command {

  user : User
  id : string
  name : string
  email : string
  password : string

  constructor(user) {
    super();
    this.id = user.id
    this.name = user.name
    this.email = user.email
    this.password = user.password
  }
}