import { User } from "../../src/entities/user";
import { UserModel } from "../models/user";

export class UserRepository {

   async createUser(user:User){
        let response = await UserModel.create(user)
        return response
    }
}