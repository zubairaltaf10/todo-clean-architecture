import { UserModel } from "../../src/Infrastructure/Database/models/User"
import { Request, Response, NextFunction } from 'express';
import TodoService from "../../src/Application/Todo/TodoService";

class TodoController {
   
    async CreateTODO(req: Request, res: Response, next: NextFunction) {

       return TodoService.CreateTodo(res,req.body)
    }

    async GetTodo(req: Request, res: Response, next: NextFunction) {
        return TodoService.GetTodobyId(res,req)
    }

    async GetTodos(req:Request,res: Response , next: NextFunction){
        return TodoService.GetAllTodos(res,req)
    }

    async DeleteTODO(req: Request, res: Response, next: NextFunction) {
       return TodoService.DeleteTodo(res,req)

    }

}

export default new TodoController
