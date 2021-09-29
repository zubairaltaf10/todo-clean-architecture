import { Todo } from "../../domain/Entities/Todo/todo";
import { User } from "../../domain/Entities/User/user";

export interface IUserStore {
    getUserbyEmail(email? : string ): Promise<User>
    addUser(request: User ): Promise<User>
    deleteUser(id:string) : Promise<User>
    getAll():  Promise<User[]>
}

export interface ITodoStore {
    getTodo(req:string ): Promise<Todo>
    addTodo(request: Todo ): Promise<Todo>
    deleteTodo(id:string) : Promise<number>
    getAllTodos(limit:number,page:number):  Promise<Todo[]>
}