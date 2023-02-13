import { Router } from 'express';
import CarController from '../Controllers/CarController';

const routes = Router();
const carController = new CarController();

routes.get('/', carController.findAll);
routes.get('/:id', carController.findId);

routes.post('/', carController.create);

export default routes;