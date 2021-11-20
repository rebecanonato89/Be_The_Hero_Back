import { getRepository, Repository } from "typeorm";
import Incidents from "../models/Incidents";
import IIncidentsRepository from "./interface/IIncidentsRepository";
import ICreateIncidentsDTO from "../dto/ICreateIncidentsDTO";


class IncidentsRepository implements IIncidentsRepository {

    private ormRepository: Repository <Incidents>;

    constructor () {
        this.ormRepository = getRepository(Incidents);
    }

     async create(dataIncidents: ICreateIncidentsDTO): Promise<Incidents> {

        const incidents = this.ormRepository.create(dataIncidents);

        const incident = await this.ormRepository.save(incidents);

        return incident;

    }

    async findByOngId(ong_id: string): Promise<Incidents[]> {

        const incidents = await this.ormRepository.find({
            where: {
                ong_id
            }
        });

        return incidents;
    }
    
}

export default IncidentsRepository;