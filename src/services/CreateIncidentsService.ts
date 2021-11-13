import Incidents from "../models/Incidents";
import IncidentsRepository from "../repositories/IncidentsRepository";


interface Request {
    ong_id: string,
    title: string,
    description: string,
    value: string
}

class CreateIncidentsService  {
    public async execute(dataIncidents: Request ): Promise<Incidents> {

        const incidentsRepository = new IncidentsRepository();

        const incidents = await incidentsRepository.create(dataIncidents);

        return incidents;

    }
}

export default CreateIncidentsService;