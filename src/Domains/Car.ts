import ICar from '../Interfaces/ICar';

export default class Car {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;
  private doorsQty: number; 
  private seatsQty: number;

  constructor(objCar: ICar) {
    this.id = objCar.id;
    this.model = objCar.model;
    this.year = objCar.year;
    this.color = objCar.color;
    this.status = objCar.status;
    this.buyValue = objCar.buyValue; 
    this.doorsQty = objCar.doorsQty;
    this.seatsQty = objCar.seatsQty;
  }

  public getId() { return this.id; }
  public getModel() { return this.model; }
  public getYear() { return this.year; }
  public getColor() { return this.color; }
  public getStatus() { return this.status; }
  public getBuyValue() { return this.buyValue; }
  public getDoorsQty() { return this.doorsQty; }
  public getSeatsQty() { return this.seatsQty; }

  public setId(id: string) { this.id = id; }
  public setModel(model: string) { this.model = model; }
  public setYear(year: number) { this.year = year; }
  public setColor(color: string) { this.color = color; }
  public setStatus(status: boolean) { this.status = status; }
  public setBuyValue(buyValue: number) { this.buyValue = buyValue; }
  public setDoorsQty(doorsQty: number) { this.doorsQty = doorsQty; }
  public setSeatsQty(seatsQty: number) { this.seatsQty = seatsQty; }
}