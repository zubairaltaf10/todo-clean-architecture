import { v4 as uuidv4 } from 'uuid';
import { UniqueEntityID } from '../utils/UniqueEntityId';
import { Entity } from './Entity';


interface ITodo {
    id: string
    title: string,
    description: string,
}

class TodoEntity  {

    id : string 
    title : string
    description : string

    private constructor (props: ITodo, id?: string) {
        this.id = id
        this.title = props.title
        this.description = props.description
    }  

    public static create(props: ITodo, todoId?): TodoEntity {
        if (!todoId) {
            todoId = new UniqueEntityID();
       }
        return new TodoEntity(props,todoId)
    }
}

export default TodoEntity;