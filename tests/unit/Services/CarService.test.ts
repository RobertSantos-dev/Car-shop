import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import carsMock from './mock/CarMock';

describe('Testes do model Car', function () {
  it('01 - Teste se é retornado todos os valores da coleção', async function () {
    sinon.stub(Model, 'find').resolves(carsMock.carsAll);
    
    const service = new CarService();
    const result = await service.findAll();

    expect(result).to.be.deep.equal(carsMock.carsAll);
    sinon.restore();
  });

  it('02 - Teste se é retornado um valor da coleção', async function () {
    sinon.stub(Model, 'find').resolves(carsMock.carsAll);

    const service = new CarService();
    const result = await service.findId(carsMock.carsAll[0].id);

    expect(result.type).to.be.deep.equal(null);
    expect(result.message).to.be.deep.equal(carsMock.carsAll[0]);
    sinon.restore();
  });

  it('03 - Teste se é retornado um erro por não encontrar o id', async function () {
    sinon.stub(Model, 'find').resolves([]);

    const service = new CarService();
    const result = await service.findId('634852326b35b59438fbea29');

    expect(result.type).to.be.deep.equal(404);
    expect(result.message).to.be.deep.equal('Car not found');
    sinon.restore();
  });

  it('04 - Teste se é possivel criar um novo carro para a coleção', async function () {
    sinon.stub(Model, 'create').resolves(carsMock.carsAll[0]);

    const service = new CarService();
    const result = await service.create(carsMock.carCreate);

    expect(result).to.be.deep.equal(carsMock.carsAll[0]);
    sinon.restore();
  });
});
