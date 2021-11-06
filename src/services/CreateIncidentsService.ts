import IncidentsRepository from "../repositories/IncidentsRepository";


interface Request {
    title: string,
    description: string,
    value: string
}

class CreateIncidentsService  {
    public execute( dataIncidents: Request ) {

        const incidentsRepository = new IncidentsRepository();

        const incidents = incidentsRepository.create(dataIncidents);

        return incidents;

    }
}

export default CreateIncidentsService;