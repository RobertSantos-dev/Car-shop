import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import Car from '../Domains/Car';
import statusCode from '../utils/statusCode';

export default class CarService {
  private cars: CarODM;

  constructor() { this.cars = new CarODM(); }

  private createCarDomain(objCar: ICar) {
    if (objCar) return new Car(objCar);
    return null;
  }

  public async findAll() {
    const carsAll = await this.cars.findAll();
    const newCarsAll = carsAll.map((e) => this.createCarDomain(e));
    return newCarsAll;
  }

  public async findId(id: string) {
    const carId = await this.cars.findId(id);

    if (carId.length === 0) {
      return { type: statusCode.notFound, message: 'Car not found' };
    }
    return { type: null, message: this.createCarDomain(carId[0]) };
  }

  public async create(objCar: ICar) {
    const newCar = await this.cars.create(objCar);
    return this.createCarDomain(newCar);
  }

  public async update(id: string, objCar: ICar) {
    const carId = await this.cars.findId(id);

    if (carId.length === 0) {
      return { type: statusCode.notFound, message: 'Car not found' };
    }

    await this.cars.update(id, objCar);
    return { type: null, message: this.createCarDomain({ id, ...objCar }) };
  }
}