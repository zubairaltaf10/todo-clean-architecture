import { Router, Request, Response } from 'express';
import { Todo } from '../../Domain/Entities/Todo/Todo';
import TodoEntity from '../../Domain/Entities/Todo/TodoEntity';
import { todoStore } from '../../Infrastructure/Database/Store/TodoStore';
import { BaseService } from '../Base/BaseService';
import { ITodoService } from './ITodoService';

class TodoService extends BaseService implements ITodoService {

    todoStore: todoStore
    constructor() {
        super();
        this.todoStore = new todoStore()
    }
    async createTodo(res: Response, todo: Todo) {
        try {
            const todoEntity = TodoEntity.create(todo)
            const result = await this.todoStore.addTodo(todoEntity)
            if (result) {
                return super.created(res, 'success', "User created Successfully", result)
            }
        }
        catch (error) {
            super.error(res, (error.message))
        }
    }

    async getTodobyId(res: Response, req: Request) {
        const todo = await this.todoStore.getTodo(req.params.id)
        if (!todo) {
            return super.error(res, "No todo found");
        }
        return super.ok(res, todo)

    }

    async getAllTodos(res: Response, req: Request) {
        const todos = await this.todoStore.getAllTodos(parseInt(req.query.limit), parseInt(req.query.page))
        if (!todos.count) {
            return super.error(res, "No todo found");
        }
        return super.ok(res, todos)

    }

    async deleteTodo(res: Response, req: Request) {
        const todo = await this.todoStore.deleteTodo(req.params.id)
        if (todo != 1) {
            return super.error(res, "No todo found");
        }
        return super.ok(res, null, "todo deleted successfully")
    }
}
export default new TodoService()