const fs = require('fs')
const path = require('path')
const redis = require('redis');
const fakeDebts = require('../tmp/debtsMock')
// const checkVehicleInfo = require('../services/checkVehicleInfo')

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

    chachedDebts(request, response) {
        const { placa, renavam, auth_token } = request.body;
        debitsClient.get(`placa:${placa}`, (err, reply) => {
            if(reply != null){
                const jsonParsedRedisReply = JSON.parse(reply)
                console.log('\n Retorno da Consulta no Redis: \n', jsonParsedRedisReply)
                return response.json(jsonParsedRedisReply)
            }else{
                const databaseDebts = fakeDebts.findLicensePlate(placa,renavam)
                const stringParsedDbDebts = JSON.stringify(databaseDebts);
                console.log('\n Retorno da consulta no mock: \n', databaseDebts);
                debitsClient.setex(`placa:${placa}`, 5, stringParsedDbDebts)
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
        const { placa, renavam } = request.body
        try {
            const queriedDebtResult = fakeDebts.findLicensePlate(placa, renavam)
            return response.json(queriedDebtResult)
        } catch (error) {
            console.log(error)
            return response.json(error)
        }
    }


}