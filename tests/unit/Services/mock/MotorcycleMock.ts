const motorcycleCreate = {
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const motorcycleAll = [{
  id: '6348513f34c397abcad040b2',
  ...motorcycleCreate,
}];

export default { motorcycleAll, motorcycleCreate };
