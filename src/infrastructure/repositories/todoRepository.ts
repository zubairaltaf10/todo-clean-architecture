import { Todo } from "../../Domain/Entities/Todo/todo";
import { TodoModel } from "../Database/models/todo";

export class TodoRepository {

   async createTodo(todo:Todo){
        let response = await TodoModel.create(todo)
        return response;
    }

    async getTodo(req:string):Promise<Todo>{
        let response = await TodoModel.findOne({
            where : {id:req}
        })
        return response
    }

    async deleteTodo(id:string):Promise<number>{
        let response = await TodoModel.destroy({
            where : {id}
        })
        return response
    }
}