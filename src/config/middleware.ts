import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';

const middleware = (req:Request, res: Response, next: NextFunction) => {
    console.log(req.headers.authorization)
    return next();
}

export { middleware }