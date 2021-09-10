import { UserModel } from "../../../database/models/user"
import { Router, Request, Response, NextFunction } from 'express';
import todoService from "../../services/todoService";

class TodoController {
    constructor() {
        //  this.register = this.register.bind(this);
    }

    async createTODO(req: Request, res: Response, next: NextFunction) {

       return todoService.createTodo(req,res,req.body)
    }

    async getTODO(req: Request, res: Response, next: NextFunction) {
        return todoService.getTodobyId(res,req)
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
       return todoService.deleteTodo(res,req)

    }

}

export default new TodoController
