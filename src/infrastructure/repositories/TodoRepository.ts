import { getPagination } from "../../application/utils/GetPagination";
import { Todo } from "../../domain/Entities/Todo/todo";
import { TodoModel } from "../database/models/Todo";

export class TodoRepository {

   async createTodo(todo:Todo){
        const response = await TodoModel.create(todo)
        return response;
    }

    async getTodo(req:string):Promise<Todo>{
        const response = await TodoModel.findOne({
            where : {id:req}
        })
        return response
    }

    async deleteTodo(id:string):Promise<number>{
        const response = await TodoModel.destroy({
            where : {id}
        })
        return response
    }

    async getTodos(size:number,page:number){
        const {limit,offset} = getPagination(size,page)

        const response = await TodoModel.findAndCountAll({
            limit,
            offset,
        })
        return response
    }
}