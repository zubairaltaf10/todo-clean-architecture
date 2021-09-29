import { UserModel } from "../../src/infrastructure/database/models/User"
import { Request, Response, NextFunction } from 'express';
import TodoService from "../../src/application/Todo/TodoService";
class TodoController {
   
    async createTODO(req: Request, res: Response, next: NextFunction) {

       return TodoService.createTodo(res,req.body)
    }

    async getTODO(req: Request, res: Response, next: NextFunction) {
        return TodoService.getTodobyId(res,req)
    }

    async getTODOS(req:Request,res: Response , next: NextFunction){
        return TodoService.getAllTodos(res,req)
    }

    async deleteTODO(req: Request, res: Response, next: NextFunction) {
       return TodoService.deleteTodo(res,req)

    }

}

export default new TodoController
