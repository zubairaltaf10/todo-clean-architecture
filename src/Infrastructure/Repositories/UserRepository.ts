import { User } from "../../Domain/Entities/User/User";
import { UserModel } from "../Database/models/User";

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