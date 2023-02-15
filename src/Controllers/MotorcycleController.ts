import { Request, Response } from 'express';
import MotorcycleService from '../Services/MotorcycleService';
import statusCode from '../utils/statusCode';
// import IMotorcycle from '../Interfaces/IMotorcycle';

export default class MotorcycleController {
  constructor(private service = new MotorcycleService()) {}

  public findAll = async (_req: Request, res: Response) => {
    const motorcyclesAll = await this.service.findAll();
    res.status(statusCode.ok).json(motorcyclesAll);
  };

  public findId = async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id || id.length !== 24) {
      return res.status(statusCode.unprocessableEntity)
        .json({ message: 'Invalid mongo id' });
    }

    const { type, message } = await this.service.findId(id);

    if (type) return res.status(type).json({ message });
    return res.status(statusCode.ok).json(message);
  };

  public create = async (req: Request, res:Response) => {
    if (!req.body.status) req.body.status = false;

    try {
      const newMotorcycle = await this.service.create(req.body);
      return res.status(statusCode.created).json(newMotorcycle);
    } catch (error) {
      res.status(500).json({ message: 'error 500' });
    }
  };

  public update = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (id.length !== 24 || !id) {
      return res.status(statusCode.unprocessableEntity)
        .json({ message: 'Invalid mongo id' });
    }

    try {
      const { type, message } = await this.service.update(id, req.body);

      if (type) return res.status(type).json({ message });
      return res.status(statusCode.ok).json(message);
    } catch (error) {
      res.status(500).json({ message: 'error 500' });
    }
  };
}