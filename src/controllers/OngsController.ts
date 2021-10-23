import { Request, Response } from "express";
import CreateOngService from "../services/CreateOngsService";
import FindOngByIdService from "../services/FindOngByIdService";

export default class OngsController {

    public async create (request:Request,response:Response) {

        const { name, email, whatsapp, city, uf } = request.body;
        const createongService = new CreateOngService();
        const ong = createongService.execute({name,email,whatsapp,city,uf});

        response.status(201).json(ong);

    }

    public async findById (request:Request,response:Response) {

        const { id } = request.params;

        const findOngByIdService = new FindOngByIdService();

        const ongToken = await findOngByIdService.execute(id);

        if (!ongToken) {
            return response.status(401).json({message:"Unauthorized access of data"});
        }

        return response.status(200).json({ongToken});
    }

};