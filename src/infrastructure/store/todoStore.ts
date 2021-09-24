import { TodoRepository } from "../repositories/todoRepository";
import { Todo } from "../../Domain/Entities/Todo/todo";
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
    getAllTodos(): Promise<Todo[]> {
        throw new Error("Method not implemented.");
    }


}