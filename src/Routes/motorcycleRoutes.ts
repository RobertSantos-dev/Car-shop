import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const routes = Router();
const motorcycleController = new MotorcycleController();

routes.get('/', motorcycleController.findAll);
routes.get('/:id', motorcycleController.findId);

routes.post('/', motorcycleController.create);

export default routes;