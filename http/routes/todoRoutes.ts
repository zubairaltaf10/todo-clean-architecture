import { Router, Request, Response } from 'express'
import TodoController from '../controllers/TodoController';
import UserController from '../controllers/UserController';
import UsersMiddleware from '../middlewares/auth'
import TodoMiddleware from '../middlewares/todo'

const todoRouter = Router();

todoRouter.get('/:id', TodoMiddleware.validateParamsTodo, (req, res, next) =>
    TodoController.getTODO(req, res, next)
)

todoRouter.post('/add', TodoMiddleware.validateRequiredTodoBodyField, (req, res, next) =>
    TodoController.createTODO(req, res, next)
)

todoRouter.put('/:id', TodoMiddleware.validateEditTodo, (req, res, next) =>
    TodoController.editTODO(req, res, next)
)

todoRouter.delete('/:id', TodoMiddleware.validateParamsTodo, (req, res, next) =>
    TodoController.deleteTODO(req, res, next)
)

export default todoRouter