import { Request , Response } from "express";
import CreateIncidentsService from "../services/CreateIncidentsService";


export default class IncidentsController{

    public async create (request: Request, response: Response) {

        const { ongId } = request.ong;
        const { title, description, value } = request.body;

        const createIncidentsService = new CreateIncidentsService();
        const incident = await createIncidentsService.execute({ong_id: ongId, title, description, value});

        return response.status(201).json({ incident })        
    };

};