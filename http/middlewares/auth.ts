import express from 'express';
import jwt from 'jsonwebtoken'

class UsersMiddleware {

    async validateRequiredUserBodyFields(req: express.Request, res: express.Response, next: express.NextFunction) {
        if (req.body && req.body.name && req.body.email && req.body.password) {
            next();
        } else {
            res.status(400).send({ error: `Missing required fields` });
        }
    }

    async extractUserId(req: express.Request, res: express.Response, next: express.NextFunction) {
        req.body.id = req.params.userId;
        next();
    }

    validateTokenMiddleware(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            if (req.headers.authorization) {
                const token = req.headers.authorization
                jwt.verify(token, process.env.JWT_SECRET)
                next()
                return
            }
            return res.status(401).json({
                error: `Authentication error. Token required.`,
                status: 401
            });
        }
        catch (error) {
            return res.status(500).json({
                error: error.message,
                status: 500
            });
        }
    }
}

export default new UsersMiddleware();