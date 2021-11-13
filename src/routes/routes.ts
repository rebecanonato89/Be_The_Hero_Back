import { Router } from 'express';
import incidentsRouter from './incidents.routes';
import ongsRouter from './ongs.routes';

const routes = Router();

routes.use('/ongs', ongsRouter);
routes.use('/incidents', incidentsRouter);


export default routes;