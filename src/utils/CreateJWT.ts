import * as express from 'express'
import jwt from 'jsonwebtoken'

const secret = process.env.JWT_SECRET
export const createJWT = (payload: {}, options?: any) => {
    return jwt.sign(payload, secret, options)
}


