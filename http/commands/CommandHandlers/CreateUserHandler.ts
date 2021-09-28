import userService from "../../../src/application/User/UserService"
import userStore from "../../../src/infrastructure/store/UserStore";

export class CreateUserHandler {

 async handle(command) {
   return await userStore.addUser(command)
  }
}

