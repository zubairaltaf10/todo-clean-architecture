import { v4 as uuidv4 } from 'uuid';
import { Entity } from './Entity';

interface IUser {
    id: string
    name: string,
    email: string,
    password: string
}

class UserEntity extends Entity<IUser> {

    id : string 
    name : string
    email : string
    password : string

    private constructor (props: IUser, id?: string) {
       
        super(props,id)
        this.id = this._id
        this.name = this.props.name
        this.email = this.props.email
        this.password = this.props.password
    }  

    public static create(props: IUser, userId?: string): IUser {
        return new UserEntity(props,userId)
    }
}

export default UserEntity;