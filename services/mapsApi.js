const config = require('../config');
const makeRequest = require('../helpers/makeRequest');

function get(endpoint) {
    return makeRequest(config.maps.url, endpoint);
}

async function getCoordinatesByAddress(address) {
    const places = await get(`/search?q=${encodeURI(address)}&format=json`);
    if (!places || !places.length) {
        throw `Not possible to search location coordinates by this address: "${address}"`;
    }

    return {
        lat: places[0].lat,
        long: places[0].lon,
        address: places[0].display_name,
    }
}

module.exports = {
    getCoordinatesByAddress,
}