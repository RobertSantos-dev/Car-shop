import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import Motorcycle from '../Domains/Motorcycle';
// import statusCode from '../utils/statusCode';

export default class MotorcycleService {
  constructor(private motorcycle = new MotorcycleODM()) {}

  private createMotorcycleDomain(objMotorcycle: IMotorcycle) {
    if (objMotorcycle) return new Motorcycle(objMotorcycle);
    return null;
  }

  public async create(objMotorcycle: IMotorcycle) {
    const result = await this.motorcycle.create(objMotorcycle);
    return this.createMotorcycleDomain(result);
  }
}