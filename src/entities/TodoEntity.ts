import { v4 as uuidv4 } from 'uuid';
import { Entity } from './Entity';


interface ITodo {
    id: string
    title: string,
    description: string,
}

class TodoEntity extends Entity<ITodo> {

    id : string 
    title : string
    description : string

    private constructor (props: ITodo, id?: string) {
       super(props,id)
        this.id = this._id
        this.title = this.props.title
        this.description = this.props.description
    }  

    public static create(props: ITodo, todoId?: string): ITodo {
        return new TodoEntity(props,todoId)
    }

    public static response(){
        
    }
}

export default TodoEntity;