import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/CustomError";


export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction){
    console.log(err.stack);
    if(err instanceof CustomError){
        console.log("name de l'erreur : ", err.name);
        res.status(500).json({error: err.message, errorCode: err.errorcode});
    }else {
        res.status(500).json({error:"Erreur inattendue"});
    }
    next(err);
}