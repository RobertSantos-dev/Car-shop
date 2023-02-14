import { Request, Response } from 'express';
import MotorcycleService from '../Services/MotorcycleService';
import statusCode from '../utils/statusCode';
// import IMotorcycle from '../Interfaces/IMotorcycle';

export default class MotorcycleController {
  constructor(private service = new MotorcycleService()) {}

  public create = async (req: Request, res:Response) => {
    if (!req.body.status) req.body.status = false;

    try {
      const newMotorcycle = await this.service.create(req.body);
      return res.status(statusCode.created).json(newMotorcycle);
    } catch (error) {
      res.status(500).json({ message: 'error 500' });
    }
  };
}