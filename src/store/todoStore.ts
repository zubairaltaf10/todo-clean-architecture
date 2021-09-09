import { TodoRepository } from "../../database/repositories/todoRepository";
import { Todo } from "../entities/todo";
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
    deleteTodo(id: string): Promise<Todo> {
        throw new Error("Method not implemented.");
    }
    getAllTodos(): Promise<Todo[]> {
        throw new Error("Method not implemented.");
    }


}