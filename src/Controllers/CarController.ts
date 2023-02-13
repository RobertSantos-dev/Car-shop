import { Request, Response } from 'express';
import CarService from '../Services/CarService';
// import ICar from '../Interfaces/ICar';

export default class CarController {
//   private req: Request;
//   private res: Response;
//   private next: NextFunction;
  private service: CarService;

  constructor() {
    // this.req = req;
    // this.res = res;
    // this.next = next;
    this.service = new CarService();
  }

  public create = async (req: Request, res: Response) => {
    if (!req.body.status) req.body.status = false;

    try {
      const newCar = await this.service.createCarODM(req.body);
      return res.status(201).json(newCar);
    } catch (error) {
      res.status(500).json({ message: 'error 500' });
    }
  };
}
