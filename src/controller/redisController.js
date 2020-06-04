const fs = require('fs')
const path = require('path')

module.exports = {
    status(request, response) {
        return response.json('Routes working')
    },

    retrieveDebts(request, response) {
        fs.readFile(path.resolve(__dirname, '..', 'tmp', 'debits.json'), 'utf8', function (err, data) {
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.write(data)
            return response.end().json()

        })
    }
}