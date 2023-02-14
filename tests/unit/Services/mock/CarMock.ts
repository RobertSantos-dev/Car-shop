const carCreate = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const carsAll = [{
  id: '6348513f34c397abcad040b2',
  ...carCreate,
}, {
  id: '634852326b35b59438fbea31',
  model: 'Tempra',
  year: 1995,
  color: 'Black',
  status: false,
  buyValue: 39,
  doorsQty: 2,
  seatsQty: 5,
}];

const carUpdate = {
  model: 'Marea',
  year: 1992,
  color: 'Red',
  status: true,
  buyValue: 12.000,
  doorsQty: 2,
  seatsQty: 5,
};

export default { carsAll, carCreate, carUpdate };