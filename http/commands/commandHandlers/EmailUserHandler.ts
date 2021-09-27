import userService from "../../../src/Application/User/UserService"
import userStore from "../../../src/infrastructure/store/userStore";

export class CreateUserHandler {

 async handle(command) {
   return await userStore.addUser(command)
  }
}

