import 'reflect-metadata';
import { Router } from "express";
import IncidentsController from "../controllers/IncidentsController";
import requestSchema from '../middlewares/IncidentValidator';
import IncidentValidate from '../middlewares/IncidentValidate';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const incidentsRouter = Router();
const incidentsController = new IncidentsController();

incidentsRouter.use(ensureAuthenticated);

incidentsRouter.post('/', IncidentValidate(requestSchema), incidentsController.create);
incidentsRouter.get('/', incidentsController.find);
incidentsRouter.delete('/:id', incidentsController.delete);

export default incidentsRouter;