const debtsMock = require('../tmp/debtsMock')
const { find, findVehicleInfo, validateVehicleInfo } = require('./checkVehicleInfo');
const json = require('../tmp/debtsMock.json')



const placa = ["LSO6I92", "LSO6I93", "ALW8U54"]
const renavam = ["01089855947", "01089855948", "01089855949"];
const uf = ["rj", "sp", "es"];

describe('Testing Query functions', () => {
    test('Should return all debts from database', () => {
        const debtsFromMock = find();
        expect(debtsFromMock[0]).toEqual(json[0])
    });

    test('Should return a queried vehicle from database ', () => {

        const queriedDebtsfromMock = findVehicleInfo(placa[0], renavam[0], uf[0])
        expect(queriedDebtsfromMock[0]).toEqual(json[0])
    });

    test('Should validate if all vehicle parameters are sent', () => {
        const queryValidation = validateVehicleInfo(placa[0], renavam[0], uf[0])
        expect(queryValidation[0]).toEqual(json[0])
    });
    test("Shouldn't validate if one vehicle parameter are missing", () => {
        const queryValidation = validateVehicleInfo(placa[0], renavam[0])
        expect(queryValidation[0]).not.toEqual(json[0])
    });
})

