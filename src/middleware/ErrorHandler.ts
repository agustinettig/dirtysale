import { NextFunction, Request, Response } from "express";
import { BusinessError } from "../error/BusinessError";

export function errorHandler(err: BusinessError, req: Request, res: Response, next: NextFunction) {
    let modelState = null;
    if (err.modelState) {
        modelState = Array.from(
            err.modelState
          ).reduce((o, [key, value]) => { 
            o[key] = value;     
            return o; 
          }, {});
    }
    return res.status(err.httpCode).json({
        message: err.message,
        modelState
    });
}