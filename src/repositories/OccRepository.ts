import { getRepository, Repository } from "typeorm";
import Occurences from "../models/Occurrences";
import IOccRepository from "./interface/IOccRepository";
import ICreateOccDTO from "../dto/ICreateOccDTO";


class OccRepository implements IOccRepository {

    private ormRepository: Repository <Occurences>;

    constructor () {
        this.ormRepository = getRepository(Occurences);
    }

     async create(dataOcc: ICreateOccDTO): Promise<Occurences> {

        const occurences = this.ormRepository.create(dataOcc);

        await this.ormRepository.save(occurences);

        return occurences;

    }


    
}

export default OccRepository;