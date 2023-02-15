import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import motorcycleMock from './mock/MotorcycleMock';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Testes do model Motorcycle', function () {
  it('01 - Teste se é retornado todos os valores da coleção', async function () {
    sinon.stub(Model, 'find').resolves(motorcycleMock.motorcycleAll);
    
    const service = new MotorcycleService();
    const result = await service.findAll();

    expect(result).to.be.deep.equal(motorcycleMock.motorcycleAll);
    sinon.restore();
  });

  it('02 - Teste se é retornado um valor da coleção', async function () {
    sinon.stub(Model, 'find').resolves(motorcycleMock.motorcycleAll);

    const service = new MotorcycleService();
    const result = await service.findId(motorcycleMock.motorcycleAll[0].id);

    expect(result.type).to.be.deep.equal(null);
    expect(result.message).to.be.deep.equal(motorcycleMock.motorcycleAll[0]);
    sinon.restore();
  });

  it('03 - Teste se é retornado um erro por não encontrar o id', async function () {
    sinon.stub(Model, 'find').resolves([]);

    const service = new MotorcycleService();
    const result = await service.findId('634852326b35b59438fbea29');

    expect(result.type).to.be.deep.equal(404);
    expect(result.message).to.be.deep.equal('Motorcycle not found');
    sinon.restore();
  });

  it('04 - Teste se é possivel criar um novo valor para a coleção', async function () {
    sinon.stub(Model, 'create').resolves(motorcycleMock.motorcycleAll[0]);

    const service = new MotorcycleService();
    const result = await service.create(motorcycleMock.motorcycleCreate);

    expect(result).to.be.deep.equal(motorcycleMock.motorcycleAll[0]);
    sinon.restore();
  });
});