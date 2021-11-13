import { NextFunction, Request, Response } from 'express';
import authConfig from "../config/auth";
import { verify } from 'jsonwebtoken';
import OngsRepository from '../repositories/OngsRepository';

interface ITokenPayload {
	iat: number;
	exp: number;
	sub: string;
}

export default async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> {

  const authOng = request.headers.authorization;

  if (!authOng) {
    throw new Error("token invalid");
  }

  const [, token] = authOng.split(' ');

  try{

    const decoded = verify(token, authConfig.jwt.secret);

    if (!decoded) {
      throw new Error("token invalid");
    }

    const { sub } = decoded as ITokenPayload;

    const ongsRepository = new OngsRepository();

    const ong = await ongsRepository.findOneById(sub);

    if(!ong){
      throw new Error("token invalid");
    }

    request.ong = {
      ongId: ong.id
    }

    return next();
  } catch {
		throw new Error("token invalid");
	}

}
