import { NextFunction, Request, Response } from "express";
import { ObjectShape, OptionalObjectSchema } from "yup/lib/object";


const OngValidate = ( requestSchema:OptionalObjectSchema <ObjectShape> ) =>
    async ( request:Request, response:Response, next:NextFunction ) => {
        
        const { name, email, whatsapp, city, uf } = request.body;
    
        try {
            await requestSchema.validate
            ({
                name, email, whatsapp, city, uf
            });
            
            return next();

        }
        catch {
            throw new Error();             
        }

}


export default OngValidate