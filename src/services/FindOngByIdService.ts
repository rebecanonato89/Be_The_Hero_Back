import OngsRepository from "../repositories/OngsRepository";
import authConfig from "../config/auth";
import { sign } from "jsonwebtoken";

interface IResponse {

    name:string,
    token:string

};

class FindOngByIdService{

    public async execute(id: string): Promise<IResponse | undefined>{

    const ongsRepository = new OngsRepository();

    const ong = await ongsRepository.findOneById(id);

    if (ong) {

        const { secret, expiresIn } = authConfig.jwt;

        const token = sign({}, secret, {
            subject: ong.id,
            expiresIn,
        });

        return {
            name: ong.name,
            token,
        };
    }

    

    }

}
export default FindOngByIdService;