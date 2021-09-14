import { UserRepository } from "../database/repositories/userRepository";
import { User } from "../entities/user";
import { IUserStore } from "./IStore";

export class UserStore implements IUserStore {

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