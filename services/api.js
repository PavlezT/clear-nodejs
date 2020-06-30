const glovoApi = require('./glovoApi');
const mapsApi = require('./mapsApi');
const config = require('../config');
const fixFloat = require('../helpers/fixFloat');

function caculateDiscount(amount, discount = config.discount) {
    const cost = (100 - discount) * amount / 100;
    if (cost <= 0) {
        throw "Could not calculate total price";
    }

    return cost;
}

async function getCost(fromAddress, toAddress) {   
    const [from, to] = await Promise.all([
        mapsApi.getCoordinatesByAddress(fromAddress),
        mapsApi.getCoordinatesByAddress(toAddress),
    ]);

    const {total} = await glovoApi.estimateCost(from, to)
    const price = caculateDiscount(total.amount);

    return {
        currency: total.currency,
        amount: price,
        display_amount: fixFloat(price/100)
    }
}

module.exports = {
    getCost,
    caculateDiscount,
}