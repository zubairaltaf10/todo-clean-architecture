import {Command} from "simple-command-bus"

export class CreateUserCommand extends Command {
    name : string
    email : string
    password: string

  constructor(name, email, password) {
    super();
    this.name = name;
    this.email = email;
    this.password = password;
  }
}