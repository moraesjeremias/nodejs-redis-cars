const debtsMock = require('../tmp/debtsMock')


module.exports = {

    find() {
        return debtsMock
    },

    findLicensePlate(licensePlateQuery, carRegistry) {
        const filteredLicensePlate = debtsMock.filter(carro =>
            carro.result.veiculo.placa == licensePlateQuery || 
            carro.result.veiculo.renavam == carRegistry
        );
        return filteredLicensePlate
    }

}