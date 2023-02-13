export default interface ICar {
  id?: string,
  model: string,
  year: number,
  color: string,
  status?: boolean,
  buyValue: number,
  seatsQty: number,
  doorsQty: number,
}