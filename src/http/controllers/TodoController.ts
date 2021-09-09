import { UserModel } from "../db/models/user"
import { Router, Request, Response, NextFunction } from 'express';
import { TodoModel } from "../db/models/todo";
import todoService from "../../services/todoService";


class TodoController {
    constructor() {
        //  this.register = this.register.bind(this);
    }

    async createTODO(req: Request, res: Response, next: NextFunction) {
       return todoService.createTodo(req.body)
    }

    async getTODO(req: Request, res: Response, next: NextFunction) {
        return todoService.getTodobyId(req)
    }


    async editTODO(req: Request, res: Response, next: NextFunction):Promise<void> {
        try {
            await TodoModel.update(req.body,{
               where : {id:req.params.id}
           })
            res.status(200).send({response:"todo updated successfully"})
        } catch (error) {
            res.status(400).send(error)
        }

    }

    async deleteTODO(req: Request, res: Response, next: NextFunction) {
        try {
            await TodoModel.destroy({
               where : {id:req.params.id}
           })
            res.status(200).send({response:"todo deleted successfully"})
        } catch (error) {
            res.status(400).send(error)
        }

    }

}

export default new TodoController
