import { NextFunction, Request, Response } from "express";
import { ObjectShape, OptionalObjectSchema } from "yup/lib/object";


const IncidentValidate = ( requestSchema:OptionalObjectSchema <ObjectShape> ) =>
    async ( request:Request, response:Response, next:NextFunction ) => {
        
        const { title, description, value } = request.body;
    
        try {

            await requestSchema.validate
            ({
                title, description, value
            });
            
            return next();

        }
        catch {
            throw new Error();             
        }

}


export default IncidentValidate