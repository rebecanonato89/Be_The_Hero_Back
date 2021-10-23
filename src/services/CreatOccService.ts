import OccRepository from "../repositories/OccRepository";


interface Request {
    tytle: string,
    description: string,
    value: string
}

class CreateOccService  {
    public execute( dataOcc: Request ) {

        const occRepository = new OccRepository();

        const occurences = occRepository.create(dataOcc);

        return occurences;

    }
}

export default CreateOccService;