const debtsMock = require('../tmp/debtsMock')
const { find, findLicensePlate } = require('./checkVehicleInfo');
const json = require('../tmp/debtsMock.json')



const placa = ["LSO6I92", "LSO6I93"]
const renavam = ["01089855947", "01089855948"];

describe('Testing Query functions', () => {
    test('Should return all debts from database', () => {
        const debtsFromMock = find();
        expect(debtsFromMock[0]).toEqual(json[0])
    });

    test('Should return a queried vehicle from database ', () => {

        const queriedDebtsfromMock = findLicensePlate(placa[0], renavam[0])
        expect(queriedDebtsfromMock[0]).toEqual(json[0])
    })

})

