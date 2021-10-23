import ICreateOccDTO from "../../dto/ICreateOccDTO";
import Occurences from "../../models/Occurrences";

export default interface IOccRepository {
    create(dataOcc:ICreateOccDTO): Promise<Occurences>;
}