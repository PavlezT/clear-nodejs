const api = require('../services/api');

module.exports = (router) => {
    router.post('/orders/estimate', async (req, res) => {
        const {from, to} = req.body;

        let status, result;
        try {
            result = await api.getCost(from, to);
            status = 200;
        } catch(error) {
            console.error('[Api] getCost error', error);
            result = {message: error.message || error};
            status = 400;
        }
        
        res.writeHead(status, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
    })
}