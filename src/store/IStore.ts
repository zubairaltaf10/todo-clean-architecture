import { Todo } from "../entities/todo";
import { User } from "../entities/user";

export interface IUserStore {
    getUserbyEmailOrId(id? : string,email? : string ): Promise<User>
    addUser(request: User ): Promise<User>
    deleteUser(id:string) : Promise<User>
    getAll():  Promise<User[]>
}

export interface ITodoStore {
    getTodo(req:string ): Promise<Todo>
    addTodo(request: Todo ): Promise<Todo>
    deleteTodo(id:string) : Promise<Todo>
    getAllTodos():  Promise<Todo[]>
}