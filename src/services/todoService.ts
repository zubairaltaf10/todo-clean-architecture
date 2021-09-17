import { Router, Request, Response, NextFunction } from 'express';
import Entity from '../entities/Entity';
import { Todo } from '../entities/todo';
import TodoEntity from '../entities/TodoEntity';
import { User } from '../entities/user';
import { todoStore } from '../store/todoStore';
import { baseService } from './baseService';

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