import { NextFunction,Request,Response } from "express";
import  OngsRepository  from "../repositories/OngsRepository";


const ongsRepository = new OngsRepository();

export default function ChecksExistsOng(
    request:Request, response:Response, next:NextFunction
    ): void {  
    const { email } = request.headers;

    try {

        if(!email){
            throw new Error("Unfilled email");
            
        }

        const ong = ongsRepository.findOneByEmail(String(email));


        return next(ong)
    } catch {
        throw new Error ("Bad Request")
    }
}