import { UserModel } from "../../src/Infrastructure/Database/Models/User"
import { Request, Response, NextFunction } from 'express';
import TodoService from "../../src/Application/Todo/TodoService";

class TodoController {
   
    async createTODO(req: Request, res: Response, next: NextFunction) {

       return TodoService.createTodo(res,req.body)
    }

    async getTodo(req: Request, res: Response, next: NextFunction) {
        return TodoService.getTodobyId(res,req)
    }

    async getTodos(req:Request,res: Response , next: NextFunction){
        return TodoService.getAllTodos(res,req)
    }

    async deleteTODO(req: Request, res: Response, next: NextFunction) {
       return TodoService.deleteTodo(res,req)

    }

}

export default new TodoController()
