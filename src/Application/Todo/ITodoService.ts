import { Router, Request, Response, NextFunction } from 'express';
import { Todo } from '../../Domain/Entities/Todo/Todo';

export interface ITodoService{
    CreateTodo(res:Response,todo: Todo)
    GetTodobyId(res:Response,req: Request):Promise<Response>
    GetAllTodos(res:Response, req:Request):Promise<Response>
    DeleteTodo(res:Response,req: Request):Promise<Response>
}