import IncidentsRepository from "../repositories/IncidentsRepository";

 class FindIncidentService {
  public async execute(ong_id: string){
    const incidentsRepository = new IncidentsRepository();

    const incidentsData = await incidentsRepository.findByOngId(ong_id);

    return incidentsData;
  }
 }

export default FindIncidentService;