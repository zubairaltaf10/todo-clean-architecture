import { UniqueEntityID } from '../utils/UniqueEntityId';

interface IUser {
    id: string
    name: string,
    email: string,
    password: string
}

class UserEntity {

    id : string 
    name : string
    email : string
    password : string

    private constructor (props: IUser, id?: string) {
       
        this.id = id
        this.name = props.name
        this.email = props.email
        this.password = props.password
    }  

    public static create(props: IUser, userId?): UserEntity {
        if (!userId) {
            userId = new UniqueEntityID();
       }
        return new UserEntity(props,userId['_id'])
    }
}

export default UserEntity;