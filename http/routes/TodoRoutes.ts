import { Router, Request, Response } from 'express'
import TodoController from '../controllers/TodoController';
import TodoMiddleware from '../middlewares/Todo'

const todoRouter = Router();

todoRouter.get('/all', (req, res, next) =>
    TodoController.getTODOS(req, res, next)
)

todoRouter.get('/one/:id', TodoMiddleware.validateParamsTodo, (req, res, next) =>
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