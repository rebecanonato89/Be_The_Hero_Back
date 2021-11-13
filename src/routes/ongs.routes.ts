import 'reflect-metadata';
import { Router } from "express";
import OngsController from "../controllers/OngsController";
import requestSchema from '../middlewares/OngsValidator';
import OngValidate from '../middlewares/OngValidate';


const ongsRouter = Router();
const ongsController = new OngsController();

ongsRouter.post('/', OngValidate(requestSchema) , ongsController.create);
ongsRouter.get('/:id', ongsController.findById);

export default ongsRouter;