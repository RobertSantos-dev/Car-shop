import Vehicle from './Vehicle';
import ICar from '../Interfaces/ICar';

export default class Car extends Vehicle {
  private doorsQty: number; 
  private seatsQty: number;

  constructor(objCar: ICar) {
    super(objCar);

    this.doorsQty = objCar.doorsQty;
    this.seatsQty = objCar.seatsQty;
  }

  public getDoorsQty() { return this.doorsQty; }
  public getSeatsQty() { return this.seatsQty; }

  public setDoorsQty(doorsQty: number) { this.doorsQty = doorsQty; }
  public setSeatsQty(seatsQty: number) { this.seatsQty = seatsQty; }
}