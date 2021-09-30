import { UserModel } from "../../src/Infrastructure/Database/Models/User"
import { Request, Response, NextFunction } from 'express';
import TodoService from "../../src/Application/Todo/TodoService";

class TodoController {
   
    async createTODO(req: Request, res: Response, next: NextFunction) {

       return TodoService.CreateTodo(res,req.body)
    }

    async getTodo(req: Request, res: Response, next: NextFunction) {
        return TodoService.GetTodobyId(res,req)
    }

    async getTodos(req:Request,res: Response , next: NextFunction){
        return TodoService.GetAllTodos(res,req)
    }

    async deleteTODO(req: Request, res: Response, next: NextFunction) {
       return TodoService.DeleteTodo(res,req)

    }

}

export default new TodoController
