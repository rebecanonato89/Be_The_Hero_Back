import OngsRepository from "../repositories/OngsRepository";


interface Request {
    name: string,
    email: string,
    whatsapp: string,
    city: string,
    uf: string,
}

class CreateOngService  {
    public async execute( dataOngs: Request ) {
        const ongsRepository = new OngsRepository();

        const ong = await ongsRepository.create(dataOngs);
        
        return ong;
    }
}

export default CreateOngService;