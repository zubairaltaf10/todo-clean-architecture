import { Router, Request, Response, NextFunction } from 'express';
import { commandBus } from '../../../bin/www';
import { User } from '../../domain/Entities/User/user';
import UserEntity from '../../domain/Entities/User/UserEntity';
import { IUserStore } from '../../infrastructure/store/IStore';
import UserCreatedEvent from '../Events/UserCreateEvent';
import { EventEmitter } from 'events';
import { EventConstants } from '../utils/EventConstants';
import { BaseService } from '../Base/BaseService';
import { CreateUserCommand } from '../../../http/commands/User/CreateUserCommand';
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

            UserCreatedEvent.dispatch(EventConstants.userCreated, userEntity)
            return super.created(res, "success", "User created successfully", result);
        }
        catch (error) {
            return super.error(res, error.message);
        }
    }
}
export default new UserService()