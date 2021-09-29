import { Router, Request, Response, NextFunction } from 'express';
import { Todo } from '../../domain/Entities/Todo/todo';

export interface ITodoService{
    createTodo(res:Response,todo: Todo)
    getTodobyId(res:Response,req: Request):Promise<Response>
    getAllTodos(res:Response, req:Request):Promise<Response>
    deleteTodo(res:Response,req: Request):Promise<Response>
}