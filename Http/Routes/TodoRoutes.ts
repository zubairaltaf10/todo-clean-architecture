import { Router, Request, Response } from 'express'
import TodoController from '../Controllers/TodoController';
import TodoMiddleware from '../Middlewares/Todo'

const todoRouter = Router();

todoRouter.get('/all', (req, res, next) =>
    TodoController.getTodos(req, res, next)
)

todoRouter.get('/id/:id', TodoMiddleware.validateParamsTodo, (req, res, next) =>
    TodoController.getTodo(req, res, next)
)


todoRouter.post('/add', TodoMiddleware.validateRequiredTodoBodyField, (req, res, next) =>
    TodoController.createTODO(req, res, next)
)


todoRouter.delete('/:id', TodoMiddleware.validateParamsTodo, (req, res, next) =>
    TodoController.deleteTODO(req, res, next)
)

export default todoRouter