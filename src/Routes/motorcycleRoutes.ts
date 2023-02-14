import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const routes = Router();
const motorcycleController = new MotorcycleController();

routes.post('/', motorcycleController.create);

export default routes;