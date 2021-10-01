import { Router, Request, Response, NextFunction } from 'express';
import { Todo } from '../../Domain/Entities/Todo/Todo';

export interface ITodoService{
    createTodo(res:Response,todo: Todo)
    getTodobyId(res:Response,req: Request):Promise<Response>
    getAllTodos(res:Response, req:Request):Promise<Response>
    deleteTodo(res:Response,req: Request):Promise<Response>
}