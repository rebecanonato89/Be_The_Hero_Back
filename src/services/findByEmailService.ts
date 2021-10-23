import Ong from "../models/Ong";
import OngsRepository from "../repositories/OngsRepository";

class FindOneByEmailService{

    public async execute(email:string):Promise<Ong | undefined>{

    const ongsRepository = new OngsRepository();

    const ong = await ongsRepository.findOneByEmail(email);

    return ong;

    }

}
export default FindOneByEmailService;