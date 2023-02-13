import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import Car from '../Domains/Car';

export default class CarService {
  private createCarDomain(objCar: ICar) {
    if (objCar) return new Car(objCar);

    return null;
  }

  public async createCarODM(objCar: ICar) {
    const cars = new CarODM();
    const newCar = await cars.create(objCar);
    return this.createCarDomain(newCar);
  }
}