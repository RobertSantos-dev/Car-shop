import { Request, Response } from 'express';
import CarService from '../Services/CarService';
import statusCode from '../utils/statusCode';
// import ICar from '../Interfaces/ICar';

export default class CarController {
  private service: CarService;

  constructor() { this.service = new CarService(); }

  public findAll = async (_req: Request, res: Response) => {
    const carsAll = await this.service.findAll();
    res.status(statusCode.ok).json(carsAll);
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

  public create = async (req: Request, res: Response) => {
    if (!req.body.status) req.body.status = false;

    try {
      const newCar = await this.service.create(req.body);
      return res.status(201).json(newCar);
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
