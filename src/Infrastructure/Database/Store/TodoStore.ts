import { TodoRepository } from "../../Repositories/TodoRepository";
import { Todo } from "../../../Domain/Entities/Todo/Todo";
import { ITodoStore } from "./IStore";


export class todoStore implements ITodoStore{

    repository:TodoRepository
    constructor(){
        this.repository = new TodoRepository()
    }

    getTodo(req:string): Promise<Todo> {
        return this.repository.getTodo(req)
    }
    addTodo(request: Todo): Promise<Todo> {
        return this.repository.createTodo(request)
    }
    deleteTodo(id: string): Promise<number> {
     return this.repository.deleteTodo(id)
    }
    getAllTodos(limit:number,page:number): Promise<any> {
        return this.repository.getTodos(limit,page)
    }

}