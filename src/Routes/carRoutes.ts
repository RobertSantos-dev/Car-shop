import { Router } from 'express';
import CarController from '../Controllers/CarController';

const routes = Router();
const carController = new CarController();

routes.post('/', carController.create);

export default routes;