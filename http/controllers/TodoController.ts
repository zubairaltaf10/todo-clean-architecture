import { UserModel } from "../../src/infrastructure/database/models/User"
import { Router, Request, Response, NextFunction } from 'express';
import TodoService from "../../src/application/Todo/TodoService";
class TodoController {
   
    async createTODO(req: Request, res: Response, next: NextFunction) {

       return TodoService.createTodo(req,res,req.body)
    }

    async getTODO(req: Request, res: Response, next: NextFunction) {
        return TodoService.getTodobyId(res,req)
    }

    async getTODOS(req:Request,res: Response , next: NextFunction){
        return TodoService.getAllTodos(res,req)
    }

    async editTODO(req: Request, res: Response, next: NextFunction):Promise<void> {
        // try {
        //     await TodoModel.update(req.body,{
        //        where : {id:req.params.id}
        //    })
        //     res.status(200).send({response:"todo updated successfully"})
        // } catch (error) {
        //     res.status(400).send(error)
        // }

    }

    async deleteTODO(req: Request, res: Response, next: NextFunction) {
       return TodoService.deleteTodo(res,req)

    }

}

export default new TodoController
