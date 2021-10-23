import OngsRepository from "../repositories/OngsRepository";


interface Request {
    name: string,
    email: string,
    whatsapp: string,
    city: string,
    uf: string,
}

class CreateOngService  {
    public execute( dataOngs: Request ) {

        const ongsRepository = new OngsRepository();

        const ong = ongsRepository.create(dataOngs);

        return ong;

    }
}

export default CreateOngService;