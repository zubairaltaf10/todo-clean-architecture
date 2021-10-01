import {  Response } from 'express';
import { commandBus } from '../../../Bin/www';
import { User } from '../../Domain/Entities/User/User';
import UserEntity from '../../Domain/Entities/User/UserEntity';
import { IUserStore } from '../../Infrastructure/Database/Store/IStore';
import UserCreatedEvent from '../Events/UserCreateEvent';
import { EventConstants } from '../Utils/EventConstants';
import { CreateUserCommand } from '../../../Http/Commands/User/CreateUserCommand';
import { IUserService } from './IUserService';
import { BaseService } from '../Base/BaseService';

class UserService extends BaseService implements IUserService {

    userStore: IUserStore

    constructor() {
        super()
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