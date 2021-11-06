import ICreateIncidentsDTO from "../../dto/ICreateIncidentsDTO";
import Incidents from "../../models/Incidents";

export default interface IIncidentsRepository {
    create(dataOcc:ICreateIncidentsDTO): Promise<Incidents>;
}