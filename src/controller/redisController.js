const fs = require('fs')
const path = require('path')

module.exports = {
    status(request, response) {
        return response.json('Routes working')
    },


    chachedDebits() {

    },

    retrieveDebts(request, response) {
        const { placa, renavam, auth_token } = request.body;
        console.log(placa, renavam, auth_token)
        if (placa == 'LSO6I92' && renavam == '01089855947' && auth_token == 'abc') {
            try {
                fs.readFile(path.resolve(__dirname, '..', 'tmp', 'debits.json'), 'utf8', function (err, data) {
                    response.writeHead(200, { 'Content-Type': 'application/json' });
                    response.write(data)
                    console.log(data)
                    return response.end().json()
                })

            }
            catch (error) {
                console.log(error)
                return error
            }

        }
        // return response.json(placa)
    },


}