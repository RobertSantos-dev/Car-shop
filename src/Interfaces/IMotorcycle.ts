import IGeneric from './IVehicle';

interface IMotocycle extends IGeneric {
  category: string,
  engineCapacity: number,
}

export default IMotocycle;