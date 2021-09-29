import { Router, Request, Response, NextFunction } from 'express';
import { commandBus } from '../../../Bin/www';
import { User } from '../../Domain/Entities/User/User';
import UserEntity from '../../Domain/Entities/User/UserEntity';
import { IUserStore } from '../../Infrastructure/Database/Store/IStore';
import UserCreatedEvent from '../Events/UserCreateEvent';
import { EventEmitter } from 'events';
import { EventConstants } from '../Utils/EventConstants';
import { BaseService } from '../Base/BaseService';
import { CreateUserCommand } from '../../../Http/Commands/User/CreateUserCommand';
import { IUserService } from './IUserService';

class UserService extends BaseService implements IUserService {

    userStore: IUserStore

    constructor() {
        super()
        CreateUserCommand
    }

    async createUser(res: Response, user: User) {

        try {
            const userEntity = UserEntity.create(user)
            const createUserEntity = new CreateUserCommand(userEntity);
            const result = await commandBus.handle(createUserEntity);
            if (!result) return super.error(res, result);

            UserCreatedEvent.Dispatch(EventConstants.userCreated, userEntity)
            return super.created(res, "success", "User created successfully", result);
        }
        catch (error) {
            return super.error(res, error.message);
        }
    }
}
export default new UserService()