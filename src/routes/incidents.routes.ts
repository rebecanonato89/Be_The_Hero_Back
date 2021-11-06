import 'reflect-metadata';
import { Router } from "express";
import IncidentsController from "../controllers/IncidentsController";
import requestSchema from '../midllewares/IncidentValidator';
import IncidentValidate from '../midllewares/IncidentValidate';


const incidentsRouter = Router();
const incidentsController = new IncidentsController();

incidentsRouter.post('/', IncidentValidate(requestSchema) , incidentsController.create);

export default incidentsRouter;