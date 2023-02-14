import Vehicle from './Vehicle';
import IMotorcycle from '../Interfaces/IMotorcycle';

export default class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(objMotorcycle: IMotorcycle) {
    super(objMotorcycle);
 
    this.category = objMotorcycle.category;
    this.engineCapacity = objMotorcycle.engineCapacity;
  }

  public getCategory() { return this.category; }
  public getEngineCapacity() { return this.engineCapacity; }

  public setCategory(category: string) { this.category = category; }
  public setEngineCapacity(engineCapacity: number) {
    this.engineCapacity = engineCapacity;
  }
}