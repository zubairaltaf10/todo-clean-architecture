import userService from "../../../src/Application/User/userService"
import userStore from "../../../src/infrastructure/store/userStore";

export class CreateUserHandler {

 async handle(command) {
   return await userStore.addUser(command)
  }
}

