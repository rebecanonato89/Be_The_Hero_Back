import { Request , Response } from "express";


export default class IncidentsController{

    public async create (request:Request,response:Response) {

        // const { Ong } = request.ong
        const { title, description, value } = request.body
        

    };

};