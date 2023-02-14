import IGeneric from './IVehicle';

interface ICar extends IGeneric {
  seatsQty: number,
  doorsQty: number,
}

export default ICar;