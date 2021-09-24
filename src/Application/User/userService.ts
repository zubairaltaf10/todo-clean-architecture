import { Router, Request, Response, NextFunction } from 'express';
import { commandBus } from '../../../bin/www';
import { CreateUserCommand } from '../../../http/commands/CreateUserCommand';
import { User } from '../../Domain/Entities/User/user';
import UserEntity from '../../Domain/Entities/User/UserEntity';
import { IUserStore } from '../../infrastructure/store/IStore';
import userStore from '../../infrastructure/store/userStore';
import UserStore from '../../infrastructure/store/userStore';
import { baseService } from '../Base/baseService';

class userService extends baseService {

    userStore: IUserStore

    constructor() {
        super()

    }

    async createUser(res: Response, req: Request, user: User) {
        try {
            const userEntity = UserEntity.create(user)
            const createUserCommand = new CreateUserCommand(userEntity);
            var result = await commandBus.handle(createUserCommand);
            console.log('Result:', result);
            // const result = await userStore.addUser(userEntity)
            if (result) {
                return super.created(res, "success", result, "User created successfully");
            }
        }
        catch (error) {
            return super.error(res, error.message);
        }
    }
}
export default new userService()