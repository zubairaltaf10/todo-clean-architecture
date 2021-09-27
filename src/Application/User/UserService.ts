import { Router, Request, Response, NextFunction } from 'express';
import { commandBus } from '../../../bin/www';
import { CreateUserCommand } from '../../../http/commands/User/CreateUserCommand';
import { User } from '../../Domain/Entities/User/user';
import UserEntity from '../../Domain/Entities/User/UserEntity';
import { IUserStore } from '../../infrastructure/store/IStore';
import { baseService } from '../Base/baseService';
import EmailConnection from '../../infrastructure/ThirdPartyClients/Email/EmailService';
import EventBus from 'js-event-bus'
import EmailService from '../../infrastructure/ThirdPartyClients/Email/EmailService';
import UserCreatedEvent from '../Events/UserCreateEvent';
import { EventEmitter } from 'events';
class UserService extends baseService {

    userStore: IUserStore

    constructor() {
        super()

    }

    async createUser(res: Response, req: Request, user: User) {
        try {
            const userEntity = UserEntity.create(user)
            const createUserEntity = new CreateUserCommand(userEntity);
            var result = await commandBus.handle(createUserEntity);
            if (result) {
                UserCreatedEvent.dispatch("userCreated", userEntity)
                return super.created(res, "success", "User created successfully", result);
            }
        }
        catch (error) {
            return super.error(res, error.message);
        }
    }
}
export default new UserService()