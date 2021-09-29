import { Router, Request, Response } from 'express'
import TodoController from '../Controllers/TodoController';
import TodoMiddleware from '../Middlewares/Todo'

const todoRouter = Router();

todoRouter.get('/all', (req, res, next) =>
    TodoController.GetTodos(req, res, next)
)

todoRouter.get('/id/:id', TodoMiddleware.validateParamsTodo, (req, res, next) =>
    TodoController.GetTodo(req, res, next)
)


todoRouter.post('/add', TodoMiddleware.validateRequiredTodoBodyField, (req, res, next) =>
    TodoController.CreateTODO(req, res, next)
)


todoRouter.delete('/:id', TodoMiddleware.validateParamsTodo, (req, res, next) =>
    TodoController.DeleteTODO(req, res, next)
)

export default todoRouter