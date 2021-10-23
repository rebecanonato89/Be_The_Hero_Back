import ICreateOngDTO from "../../dto/ICreateOngsDTO";
import Ong from "../../models/Ong";


export default interface IOngsRepository {
    create(dataOngs:ICreateOngDTO): Promise<Ong>;
}