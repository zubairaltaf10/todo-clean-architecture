import { User } from "../../domain/Entities/User/user";
import { UserModel } from "../database/models/User";

export class UserRepository {

   async createUser(user:User){
        const response = await UserModel.create(user)
        return response
    }

    async getUser(req:string):Promise<User>{
        const response = await UserModel.findOne({
            where : {email:req}
        })
        return response
    }
}