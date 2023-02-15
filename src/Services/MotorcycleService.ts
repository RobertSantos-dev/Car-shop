import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import Motorcycle from '../Domains/Motorcycle';
import statusCode from '../utils/statusCode';

const resultIdNotFound = {
  type: statusCode.notFound,
  message: 'Motorcycle not found',
};

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

    if (motorcycleId.length === 0) return resultIdNotFound;

    return {
      type: null, message: this.createMotorcycleDomain(motorcycleId[0]),
    };
  }

  public async create(objMotorcycle: IMotorcycle) {
    const result = await this.motorcycle.create(objMotorcycle);
    return this.createMotorcycleDomain(result);
  }

  public async update(id: string, objMotorcycle: IMotorcycle) {
    const motorcycleId = await this.motorcycle.findId(id);

    if (motorcycleId.length === 0) return resultIdNotFound;

    await this.motorcycle.update(id, objMotorcycle);
    const upMotorcycle = this.createMotorcycleDomain({ id, ...objMotorcycle });

    return { type: null, message: upMotorcycle };
  }
}