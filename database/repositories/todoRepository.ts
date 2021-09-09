import { Todo } from "../../src/entities/todo";
import { User } from "../../src/entities/user";
import { TodoModel } from "../../src/http/db/models/todo";

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
}