const redis = require('redis');
const fakeDebts = require('../services/checkVehicleInfo')

const debitsClient = redis.createClient();


module.exports = {
    status(request, response) {
        name = 'name'
        debitsClient.get(name, (err, reply) => {
            try {
                return response.json(reply)
            } catch (error) {
                console.log(err)
                return response.send(err)
            }
        })
    },

    chachedDebtsFromRedis(request, response) {
        const { placa, renavam, auth_token, uf } = request.body;
        debitsClient.get(`placa:${placa}:${renavam}:${uf}`, (err, reply) => {
            if(reply != null){
                try {
                    const jsonParsedRedisReply = JSON.parse(reply)
                    console.log('\n Retorno da Consulta no Redis: \n', jsonParsedRedisReply)
                    return response.json(jsonParsedRedisReply)
                } catch (error) {
                    console.log(err)
                    return err
                }
            }else{
                const databaseDebts = fakeDebts.findLicensePlate(placa,renavam, uf)
                const stringParsedDbDebts = JSON.stringify(databaseDebts);
                console.log('\n Retorno da consulta no mock: \n', databaseDebts);
                debitsClient.setex(`placa:${placa}:${renavam}:${uf}`, 57600, stringParsedDbDebts)
                return response.json(databaseDebts) 
            }  
        })
    },

    retrieveAllDebts(request, response) {
        try {
            const debtsResults = fakeDebts.find()
            console.log(debtsResults)
            return response.json(debtsResults)
        } catch (error) {
            console.log(error)
            return response.json(error)
        }
    },

    retrieveQueriedDebt(request, response) {
        const { placa, renavam, location } = request.body
        console.log(placa, renavam, location)
        try {
            const queriedDebtResult = fakeDebts.validateVehicleInfo(placa, renavam, location)
            return response.json(queriedDebtResult)
        } catch (error) {
            console.log(error)
            return response.json(error)
        }
    }


}