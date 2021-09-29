import { User } from "../../domain/Entities/User/user";
import { Router, Request, Response, NextFunction } from 'express';


export interface IUserService {
  createUser(response: Response,user:User): Promise<User>;
}
