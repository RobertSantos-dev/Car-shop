import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import Motorcycle from '../Domains/Motorcycle';
import statusCode from '../utils/statusCode';

export default class MotorcycleService {
  constructor(private motorcycle = new MotorcycleODM()) {}

  private createMotorcycleDomain(objMotorcycle: IMotorcycle) {
    if (objMotorcycle) return new Motorcycle(objMotorcycle);
    return null;
  }

  public async findAll() {
    const motorcycleAll = await this.motorcycle.findAll();
    const result = motorcycleAll.map((e) => this.createMotorcycleDomain(e));
    return result;
  }

  public async findId(id: string) {
    const motorcycleId = await this.motorcycle.findId(id);

    if (motorcycleId.length === 0) {
      return { type: statusCode.notFound, message: 'Motorcycle not found' };
    }
    return {
      type: null, message: this.createMotorcycleDomain(motorcycleId[0]),
    };
  }

  public async create(objMotorcycle: IMotorcycle) {
    const result = await this.motorcycle.create(objMotorcycle);
    return this.createMotorcycleDomain(result);
  }
}