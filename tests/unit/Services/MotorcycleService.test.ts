import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import motorcycleMock from './mock/MotorcycleMock';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Testes do model Motorcycle', function () {
  it('01 - Teste se é possivel criar um novo valor para a coleção', async function () {
    sinon.stub(Model, 'create').resolves(motorcycleMock.motorcycleAll[0]);

    const service = new MotorcycleService();
    const result = await service.create(motorcycleMock.motorcycleCreate);

    expect(result).to.be.deep.equal(motorcycleMock.motorcycleAll[0]);
  });
});