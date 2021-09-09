import express from 'express';
// import userService from '../services/users.service';
import debug from 'debug';

class UsersMiddleware {

    async validateRequiredUserBodyFields(req: express.Request, res: express.Response, next: express.NextFunction) {
        if (req.body && req.body.name && req.body.email && req.body.password) {
            next();
        } else {
            res.status(400).send({error: `Missing required fields`});
        }
    }

    async validateUserExists(req: express.Request, res: express.Response, next: express.NextFunction) {
        // const user = await userService.readById(req.params.userId);
        // if (user) {
        //     next();
        // } else {
        //     res.status(404).send({error: `User ${req.params.userId} not found`});
        // }
    }

    async extractUserId(req: express.Request, res: express.Response, next: express.NextFunction) {
        req.body.id = req.params.userId;
        next();
    }
}

export default new UsersMiddleware();