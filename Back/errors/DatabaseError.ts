import { DATABASE_ERROR_CODE, DATABASE_ERROR_NAME } from "../constantes/errorCodes";
import { CustomError } from "./CustomError";

export class DatabaseError extends CustomError {
    constructor(message:string){
        super(message, DATABASE_ERROR_CODE);
        this.name = DATABASE_ERROR_NAME
    }
}