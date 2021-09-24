import { UserRepository } from "../repositories/userRepository";
import { User } from "../../Domain/Entities/User/user";
import { IUserStore } from "./IStore";

class UserStore implements IUserStore {

    repository: UserRepository
    constructor() {
        this.repository = new UserRepository()
    }
    getUserbyEmail(email?: string): Promise<User> {
       return this.repository.getUser(email)
    }
    // }
    addUser(request: User): Promise<User> {
        return this.repository.createUser(request)
    }
    deleteUser(id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    getAll(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }

}

export default new UserStore()