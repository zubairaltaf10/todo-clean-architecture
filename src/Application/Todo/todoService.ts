import { Router, Request, Response, NextFunction } from 'express';
import Entity from '../../Domain/Entities/User/UserEntity';
import { Todo } from '../../Domain/Entities/Todo/todo';
import TodoEntity from '../../Domain/Entities/Todo/TodoEntity';
import { User } from '../../Domain/Entities/User/user';
import { todoStore } from '../../infrastructure/store/todoStore';
import { baseService } from '../Base/baseService';

class todoService extends baseService {

    todoStore: todoStore
    constructor() {
        super();
        this.todoStore = new todoStore()
    }
    async createTodo(req:Request,res:Response,todo: Todo) {
        try {
            const todoEntity = TodoEntity.create(todo)
            const result = await this.todoStore.addTodo(todoEntity)
            if (result) {
                return super.created(res,'success',"User created Successfully",result)
            }
        }
        catch (error) {
            super.error(res,(error.message))
        }
    }

    async getTodobyId(res:Response,req: Request) {
        const todo = await this.todoStore.getTodo(req.params.id)
        if (todo) {
            return super.ok(res,todo)
        }
        else {
            return super.error(res,"No todo found");
        }
    }

    async deleteTodo(res:Response,req: Request) {
       const todo = await this.todoStore.deleteTodo(req.params.id)
        if (todo == 1) {
            return super.ok(res,null,"todo deleted successfully")
        }
        else {
            return super.error(res,"No todo found");
        }
    }
}
export default new todoService()