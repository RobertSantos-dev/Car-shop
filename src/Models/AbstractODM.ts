import { Model, model, Schema, models } from 'mongoose';

export default abstract class Abstract<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async findAll() {
    return this.model.find({}, { __v: 0 });
  }

  public async findId(id: string) {
    return this.model.find({ _id: id }, { __v: 0 });
  }

  public async create(obj: T) {
    return this.model.create({ ...obj });
  }

  public async update(id: string, objUpdate: Partial<T>) {
    return this.model.updateOne({ _id: id }, objUpdate);
  }
}