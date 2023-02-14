import IVehicle from '../Interfaces/IVehicle';

export default abstract class Vehicle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;

  constructor(obj: IVehicle) {
    this.id = obj.id;
    this.model = obj.model;
    this.year = obj.year;
    this.color = obj.color;
    this.status = obj.status;
    this.buyValue = obj.buyValue;
  }

  public getId() { return this.id; }
  public getModel() { return this.model; }
  public getYear() { return this.year; }
  public getColor() { return this.color; }
  public getStatus() { return this.status; }
  public getBuyValue() { return this.buyValue; }

  public setId(id: string) { this.id = id; }
  public setModel(model: string) { this.model = model; }
  public setYear(year: number) { this.year = year; }
  public setColor(color: string) { this.color = color; }
  public setStatus(status: boolean) { this.status = status; }
  public setBuyValue(buyValue: number) { this.buyValue = buyValue; }
}