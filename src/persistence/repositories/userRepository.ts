import { User } from "../../entities/user";
import { UserModel } from "../models/user";

export class UserRepository {

   async createUser(user:User){
        let response = await UserModel.create(user)
        return response
    }

    async getUser(req:string):Promise<User>{
        let response = await UserModel.findOne({
            where : {email:req}
        })
        return response
    }
}