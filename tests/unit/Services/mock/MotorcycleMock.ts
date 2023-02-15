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
}, {
  id: '634852326b35b59438fbea31',
  model: 'Honda Cbr 1000rr',
  year: 2011,
  color: 'Orange',
  status: true,
  buyValue: 59.900,
  category: 'Street',
  engineCapacity: 1000,
}];

const upMotorcycle = {
  model: 'Honda Cb 600f Hornet',
  year: 2014,
  color: 'Red',
  status: true,
  buyValue: 45.000,
  category: 'Street',
  engineCapacity: 600,
};

export default { motorcycleAll, motorcycleCreate, upMotorcycle };
