import userService from "../../../src/services/userService"
import userStore from "../../../src/store/userStore";

export class CreateUserHandler {

 async handle(command) {
   return await userStore.addUser(command)
  }
}

