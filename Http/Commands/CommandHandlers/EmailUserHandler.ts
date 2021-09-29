import userService from "../../../src/Application/User/UserService"
import userStore from "../../../src/Infrastructure/Database/Store/UserStore";

export class CreateUserHandler {

 async handle(command) {
   return await userStore.addUser(command)
  }
}

