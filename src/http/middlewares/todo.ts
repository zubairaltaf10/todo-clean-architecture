import express from 'express';
// import userService from '../services/users.service';
import debug from 'debug';

class TodoMiddleware {

    async validateRequiredTodoBodyField(req: express.Request, res: express.Response, next: express.NextFunction) {
        if (req.body && req.body.title) {
            next();
        } else {
            res.status(400).send({error: `Missing required fields`});
        }
    }

    async validateParamsTodo(req: express.Request, res: express.Response, next: express.NextFunction) {
        if (req.params.id) {
            next();
        } else {
            res.status(400).send({error: `Missing required params ID`});
        }
    }

    async validateEditTodo(req: express.Request, res: express.Response, next: express.NextFunction) {
        if (req.body && req.params.id) {
            next();
        } else {
            res.status(400).send({error: `Missing required fields`});
        }
    }


}

export default new TodoMiddleware();