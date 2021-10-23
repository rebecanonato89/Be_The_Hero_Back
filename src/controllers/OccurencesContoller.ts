import { Request , Response } from "express";


export default class OccurencesController{

    public async creat (request:Request,response:Response) {

        // const { Ong } = request.ong
        const { tytle, description, value } = request.body
        

    };

};