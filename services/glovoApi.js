const config = require('../config');
const toBase64 = require('../helpers/toBase64');
const makeRequest = require('../helpers/makeRequest');

function getAuth() {
    return toBase64(`${config.glovo.key}:${config.glovo.secret}`)
}

function post(endpoint, data) {
    return makeRequest(config.glovo.url, endpoint, 'POST', data, {'Authorization': `Basic ${getAuth()}`});
}

function buildOrder(from, to) {
    return {
        "scheduleTime": Date.now() + config.minDeliveryTime,
        "description": "A 30cm by 30cm box",
        "addresses": [
          {
            "type": "PICKUP",
            "lat": from.lat,
            "lon": from.long,
            "label": from.address,
          },
          {
            "type": "DELIVERY",
            "lat": to.lat,
            "lon": to.long,
            "label": to.address,
          }
        ]
    }
}

function estimateCost(from, to) {
    return post('/b2b/orders/estimate', buildOrder(from, to));
}

module.exports = {
    estimateCost,
}