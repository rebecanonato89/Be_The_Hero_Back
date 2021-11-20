import IncidentsRepository from "../repositories/IncidentsRepository";

class DeleteIncidentsService{

  public async execute(id:string):Promise<void>{

  const incidentsRepository = new IncidentsRepository();

  const ong = await incidentsRepository.deleteIncidentById(id);

  }

}
export default DeleteIncidentsService;