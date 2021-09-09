import { Router, Request, Response, NextFunction } from 'express';
import { Todo } from '../entities/todo';
import { User } from '../entities/user';
import { todoStore } from '../store/todoStore';
import { baseService } from './baseService';

class todoService extends baseService {

    todoStore: todoStore
    constructor() {
        super();
        this.todoStore = new todoStore()
    }
    async createTodo(todo: Todo) {
        try {
            let result = await this.todoStore.addTodo(todo)
            if (result) {
              return baseService.res.status(200).json({"response":"todo created successfully"});
            }
        }
        catch (error) {
            baseService.res.status(200).send(error.message);
        }
    }

    async getTodobyId(req:Request){
        let todo;
        
        todo = await this.todoStore.getTodo(req.params.id)
        if (todo){
        return baseService.res.status(200).json(todo);
        }
        else {
            return baseService.res.status(200).json("No todo found");
        }
    }
}
export default new todoService()