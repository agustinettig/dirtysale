import { NextFunction, Request, Response } from "express";

export function authRequired(req: Request, res: Response, next: NextFunction) {    
    if (!req.headers.authorization) {
        return res.status(401).send();        
    }
    next();
}
