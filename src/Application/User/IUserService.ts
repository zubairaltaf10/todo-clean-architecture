import { User } from "../../Domain/Entities/User/User";
import { Response } from 'express';


export interface IUserService {
  createUser(response: Response,user:User): Promise<User>;
}
