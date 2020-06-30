const fs = require('fs')

module.exports = (router) => {
    router.get('/', (req, res) => {
        fs.createReadStream('public/index.html', {encoding: 'utf8'}).pipe(res);
    })
}