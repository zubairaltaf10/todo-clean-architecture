import express from 'express';
class UsersMiddleware {

    async validateRequiredUserBodyFields(req: express.Request, res: express.Response, next: express.NextFunction) {
        if (req.body && req.body.name && req.body.email && req.body.password) {
            next();
        } else {
            res.status(400).send({error: `Missing required fields`});
        }
    }

    async extractUserId(req: express.Request, res: express.Response, next: express.NextFunction) {
        req.body.id = req.params.userId;
        next();
    }
}

export default new UsersMiddleware();