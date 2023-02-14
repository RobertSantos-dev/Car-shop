import { Model, model, Schema, models } from 'mongoose';
import ICar from '../Interfaces/ICar';

export default class CarODM {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
    });
    this.model = models.Car || model('Car', this.schema);
  }

  public async findAll() {
    return this.model.find({}, { __v: 0 });
  }

  public async findId(id: string) {
    return this.model.find({ _id: id }, { __v: 0 });
  }

  public async create(objCreate: ICar) {
    return this.model.create({ ...objCreate });
  }

  public async update(id: string, objUpdate: ICar) {
    return this.model.updateOne({ _id: id }, objUpdate);
  }
}